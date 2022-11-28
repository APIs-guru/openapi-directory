from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLongviewPlanSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLongviewPlanDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLongviewPlanRequest:
    security: GetLongviewPlanSecurity = field()
    

@dataclass
class GetLongviewPlanResponse:
    content_type: str = field()
    status_code: int = field()
    longview_subscription: Optional[shared.LongviewSubscription] = field(default=None)
    get_longview_plan_default_application_json_object: Optional[GetLongviewPlanDefaultApplicationJSON] = field(default=None)
    
