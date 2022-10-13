from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configfile
from . import importfile


@dataclass_json
@dataclass
class TargetConfiguration:
    config: Optional[configfile.ConfigFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    imports: Optional[List[importfile.ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imports' }})
    
