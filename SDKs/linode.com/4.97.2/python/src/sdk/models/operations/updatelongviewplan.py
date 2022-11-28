from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLongviewPlanSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateLongviewPlanDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateLongviewPlanRequest:
    request: shared.LongviewPlan = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLongviewPlanSecurity = field()
    

@dataclass
class UpdateLongviewPlanResponse:
    content_type: str = field()
    status_code: int = field()
    longview_subscription: Optional[shared.LongviewSubscription] = field(default=None)
    update_longview_plan_default_application_json_object: Optional[UpdateLongviewPlanDefaultApplicationJSON] = field(default=None)
    
