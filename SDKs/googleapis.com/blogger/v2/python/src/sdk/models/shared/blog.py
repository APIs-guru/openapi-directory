from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import post


@dataclass_json
@dataclass
class BlogLocale:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    variant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant' }})
    

@dataclass_json
@dataclass
class BlogPages:
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

@dataclass_json
@dataclass
class BlogPosts:
    items: Optional[List[post.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
class BlogStatusEnum(str, Enum):
    LIVE = "LIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Blog:
    custom_meta_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetaData' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    locale: Optional[BlogLocale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pages: Optional[BlogPages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    posts: Optional[BlogPosts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts' }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[BlogStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
