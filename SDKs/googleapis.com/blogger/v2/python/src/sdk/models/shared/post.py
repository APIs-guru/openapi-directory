from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostAuthorImage:
    r"""PostAuthorImage
    The creator's avatar.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PostAuthor:
    r"""PostAuthor
    The author of this Post.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[PostAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PostBlog:
    r"""PostBlog
    Data about the blog containing this Post.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PostImages:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PostLocation:
    r"""PostLocation
    The location for geotagged posts.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    span: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('span') }})
    
class PostReaderCommentsEnum(str, Enum):
    ALLOW = "ALLOW"
    DONT_ALLOW_SHOW_EXISTING = "DONT_ALLOW_SHOW_EXISTING"
    DONT_ALLOW_HIDE_EXISTING = "DONT_ALLOW_HIDE_EXISTING"


@dataclass_json
@dataclass
class PostReplies:
    r"""PostReplies
    The container of comments on this Post.
    """
    
    items: Optional[List[Comment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    
class PostStatusEnum(str, Enum):
    LIVE = "LIVE"
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    SOFT_TRASHED = "SOFT_TRASHED"


@dataclass_json
@dataclass
class Post:
    author: Optional[PostAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    blog: Optional[PostBlog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    custom_meta_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetaData') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[PostImages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[PostLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    reader_comments: Optional[PostReaderCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readerComments') }})
    replies: Optional[PostReplies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[PostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleLink') }})
    trashed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashed') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
