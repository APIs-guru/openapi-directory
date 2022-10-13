from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Link:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    hreflang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hreflang' }})
    media: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rel' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
