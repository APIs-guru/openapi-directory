from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLongviewSubscriptionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLongviewSubscriptions200ApplicationJSON:
    data: Optional[List[shared.LongviewSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetLongviewSubscriptionsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLongviewSubscriptionsRequest:
    query_params: GetLongviewSubscriptionsQueryParams = field()
    

@dataclass
class GetLongviewSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_longview_subscriptions_200_application_json_object: Optional[GetLongviewSubscriptions200ApplicationJSON] = field(default=None)
    get_longview_subscriptions_default_application_json_object: Optional[GetLongviewSubscriptionsDefaultApplicationJSON] = field(default=None)
    
