from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceReference:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    public_ecies_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicEciesKey' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    
