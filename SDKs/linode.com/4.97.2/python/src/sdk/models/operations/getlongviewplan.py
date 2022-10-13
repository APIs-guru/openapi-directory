from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLongviewPlanSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLongviewPlanSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLongviewPlanSecurity:
    option1: Optional[GetLongviewPlanSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLongviewPlanSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLongviewPlanRequest:
    security: GetLongviewPlanSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLongviewPlanDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLongviewPlanResponse:
    content_type: str = field(default=None)
    longview_subscription: Optional[shared.LongviewSubscription] = field(default=None)
    status_code: int = field(default=None)
    get_longview_plan_default_application_json_object: Optional[GetLongviewPlanDefaultApplicationJSON] = field(default=None)
    
