from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PasswordPolicyTypeRepresentation:
    config_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multiple_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipleSupported' }})
    
