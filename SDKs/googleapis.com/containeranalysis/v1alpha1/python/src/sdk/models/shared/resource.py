from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hash


@dataclass_json
@dataclass
class Resource:
    content_hash: Optional[hash.Hash] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHash' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
