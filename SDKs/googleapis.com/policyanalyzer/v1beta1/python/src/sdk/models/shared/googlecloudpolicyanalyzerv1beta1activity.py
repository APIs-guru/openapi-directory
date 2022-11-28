from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicyanalyzerV1beta1Activity:
    activity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    observation_period: Optional[GoogleCloudPolicyanalyzerV1beta1ObservationPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationPeriod') }})
    
