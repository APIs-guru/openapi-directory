from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommentAuthorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommentAuthor:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[CommentAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommentBlog:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class CommentInReplyTo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class CommentPost:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class CommentStatusEnum(str, Enum):
    LIVE = "LIVE"
    EMPTIED = "EMPTIED"
    PENDING = "PENDING"
    SPAM = "SPAM"


@dataclass_json
@dataclass
class Comment:
    author: Optional[CommentAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    blog: Optional[CommentBlog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_reply_to: Optional[CommentInReplyTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inReplyTo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    post: Optional[CommentPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[CommentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
