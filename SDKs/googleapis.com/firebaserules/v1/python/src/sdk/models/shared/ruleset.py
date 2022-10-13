from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import source


@dataclass_json
@dataclass
class Ruleset:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
