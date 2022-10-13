from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Notification:
    custom_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attributes' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_types' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    object_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_name_prefix' }})
    payload_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload_format' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
