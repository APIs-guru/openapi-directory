from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetKeysQueryParams:
    after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    is_read_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_read_only', 'style': 'form', 'explode': True }})
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetKeysSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass_json
@dataclass
class GetKeys200ApplicationJSON:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_current') }})
    is_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_limited') }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_url') }})
    query_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_duration_ms') }})
    results: Optional[List[shared.Key]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class GetKeysRequest:
    query_params: GetKeysQueryParams = field()
    security: GetKeysSecurity = field()
    

@dataclass
class GetKeysResponse:
    content_type: str = field()
    status_code: int = field()
    get_keys_200_application_json_object: Optional[GetKeys200ApplicationJSON] = field(default=None)
    
