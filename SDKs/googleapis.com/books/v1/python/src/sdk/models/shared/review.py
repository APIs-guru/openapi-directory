from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReviewAuthor:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    

@dataclass_json
@dataclass
class ReviewSource:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extra_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraDescription' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Review:
    author: Optional[ReviewAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    full_text_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullTextUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    source: Optional[ReviewSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
