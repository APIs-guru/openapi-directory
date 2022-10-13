from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configfile


@dataclass_json
@dataclass
class ConfigSource:
    files: Optional[List[configfile.ConfigFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
