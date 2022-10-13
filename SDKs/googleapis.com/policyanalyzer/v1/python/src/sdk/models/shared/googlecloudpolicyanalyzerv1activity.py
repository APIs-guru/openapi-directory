from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicyanalyzerv1observationperiod


@dataclass_json
@dataclass
class GoogleCloudPolicyanalyzerV1Activity:
    activity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    observation_period: Optional[googlecloudpolicyanalyzerv1observationperiod.GoogleCloudPolicyanalyzerV1ObservationPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observationPeriod' }})
    
