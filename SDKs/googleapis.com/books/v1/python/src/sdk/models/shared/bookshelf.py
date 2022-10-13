from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Bookshelf:
    access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeCount' }})
    volumes_last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumesLastUpdated' }})
    
