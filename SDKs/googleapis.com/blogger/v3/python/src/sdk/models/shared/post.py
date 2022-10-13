from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class PostAuthorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostAuthor:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[PostAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostBlog:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PostImages:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostLocation:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    span: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'span' }})
    
class PostReaderCommentsEnum(str, Enum):
    ALLOW = "ALLOW"
    DONT_ALLOW_SHOW_EXISTING = "DONT_ALLOW_SHOW_EXISTING"
    DONT_ALLOW_HIDE_EXISTING = "DONT_ALLOW_HIDE_EXISTING"


@dataclass_json
@dataclass
class PostReplies:
    items: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
class PostStatusEnum(str, Enum):
    LIVE = "LIVE"
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    SOFT_TRASHED = "SOFT_TRASHED"


@dataclass_json
@dataclass
class Post:
    author: Optional[PostAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    blog: Optional[PostBlog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    custom_meta_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetaData' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[PostImages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[PostLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    reader_comments: Optional[PostReaderCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readerComments' }})
    replies: Optional[PostReplies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[PostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleLink' }})
    trashed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trashed' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
