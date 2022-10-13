from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mappingsettings


@dataclass_json
@dataclass
class VerificationSettings:
    fields: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    mapping_settings: Optional[mappingsettings.MappingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappingSettings' }})
    
