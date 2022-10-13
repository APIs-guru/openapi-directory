from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternalProtectionLevelOptions:
    ekm_connection_key_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ekmConnectionKeyPath' }})
    external_key_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalKeyUri' }})
    
