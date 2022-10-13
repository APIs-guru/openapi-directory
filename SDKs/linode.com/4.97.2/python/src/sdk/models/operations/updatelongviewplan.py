from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLongviewPlanSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateLongviewPlanSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLongviewPlanSecurity:
    option1: Optional[UpdateLongviewPlanSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateLongviewPlanSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateLongviewPlanRequest:
    request: shared.LongviewPlan = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLongviewPlanSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateLongviewPlanDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateLongviewPlanResponse:
    content_type: str = field(default=None)
    longview_subscription: Optional[shared.LongviewSubscription] = field(default=None)
    status_code: int = field(default=None)
    update_longview_plan_default_application_json_object: Optional[UpdateLongviewPlanDefaultApplicationJSON] = field(default=None)
    
