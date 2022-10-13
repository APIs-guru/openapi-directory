from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import version


@dataclass_json
@dataclass
class Location:
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
