from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import type
from . import versionsource


@dataclass_json
@dataclass
class Hl7TypesConfig:
    type: Optional[List[type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[List[versionsource.VersionSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
