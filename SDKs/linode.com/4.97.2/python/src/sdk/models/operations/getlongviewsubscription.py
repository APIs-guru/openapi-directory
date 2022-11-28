from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLongviewSubscriptionPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLongviewSubscriptionDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLongviewSubscriptionRequest:
    path_params: GetLongviewSubscriptionPathParams = field()
    

@dataclass
class GetLongviewSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    longview_subscription: Optional[shared.LongviewSubscription] = field(default=None)
    get_longview_subscription_default_application_json_object: Optional[GetLongviewSubscriptionDefaultApplicationJSON] = field(default=None)
    
