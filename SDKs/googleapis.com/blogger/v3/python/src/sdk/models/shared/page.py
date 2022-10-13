from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageAuthorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PageAuthor:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[PageAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PageBlog:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PageStatusEnum(str, Enum):
    LIVE = "LIVE"
    DRAFT = "DRAFT"
    SOFT_TRASHED = "SOFT_TRASHED"


@dataclass_json
@dataclass
class Page:
    author: Optional[PageAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    blog: Optional[PageBlog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[PageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    trashed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trashed' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
