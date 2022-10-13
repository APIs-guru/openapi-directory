from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1AssociationInfo:
    base_entitlement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseEntitlement' }})
    
