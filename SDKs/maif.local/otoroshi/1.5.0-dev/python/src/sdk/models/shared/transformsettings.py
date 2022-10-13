from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from . import inqueryparam
from . import inheader
from . import incookie
from . import mappingsettings


@dataclass_json
@dataclass
class TransformSettings:
    location: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mapping_settings: mappingsettings.MappingSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappingSettings' }})
    
