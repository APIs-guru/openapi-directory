from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import managedzonepeeringconfigtargetnetwork


@dataclass_json
@dataclass
class ManagedZonePeeringConfig:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    target_network: Optional[managedzonepeeringconfigtargetnetwork.ManagedZonePeeringConfigTargetNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNetwork' }})
    
