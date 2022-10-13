from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configfile
from . import importfile


@dataclass_json
@dataclass
class Manifest:
    config: Optional[configfile.ConfigFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    expanded_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expandedConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    imports: Optional[List[importfile.ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imports' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    layout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    manifest_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifestSizeBytes' }})
    manifest_size_limit_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifestSizeLimitBytes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
