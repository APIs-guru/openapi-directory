from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1VersionVariantsVariant:
    is_control_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isControlGroup' }})
    traffic_allocation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficAllocation' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
