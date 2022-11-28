from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    is_admin: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_admin', 'style': 'form', 'explode': True }})
    is_locked: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_locked', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass_json
@dataclass
class GetUsers200ApplicationJSONOutput:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_current') }})
    is_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_limited') }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_url') }})
    query_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_duration_ms') }})
    results: Optional[List[shared.UserOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field()
    security: GetUsersSecurity = field()
    

@dataclass
class GetUsersResponseOutput:
    content_type: str = field()
    status_code: int = field()
    get_users_200_application_json_object: Optional[GetUsers200ApplicationJSONOutput] = field(default=None)
    
