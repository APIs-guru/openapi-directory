from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    min_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minDuration' }})
    traffic_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficPercent' }})
    
