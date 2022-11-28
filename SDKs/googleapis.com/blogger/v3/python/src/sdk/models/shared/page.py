from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PageAuthorImage:
    r"""PageAuthorImage
    The creator's avatar.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PageAuthor:
    r"""PageAuthor
    The author of this Page.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[PageAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PageBlog:
    r"""PageBlog
    Data about the blog containing this Page.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PageStatusEnum(str, Enum):
    LIVE = "LIVE"
    DRAFT = "DRAFT"
    SOFT_TRASHED = "SOFT_TRASHED"


@dataclass_json
@dataclass
class Page:
    author: Optional[PageAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    blog: Optional[PageBlog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[PageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    trashed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashed') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
