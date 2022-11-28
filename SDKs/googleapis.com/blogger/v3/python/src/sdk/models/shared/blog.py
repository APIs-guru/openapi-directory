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
class BlogLocale:
    r"""BlogLocale
    The locale this Blog is set to.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    variant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variant') }})
    

@dataclass_json
@dataclass
class BlogPages:
    r"""BlogPages
    The container of pages in this blog.
    """
    
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclass
class BlogPosts:
    r"""BlogPosts
    The container of posts in this blog.
    """
    
    items: Optional[List[Post]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    
class BlogStatusEnum(str, Enum):
    LIVE = "LIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Blog:
    custom_meta_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetaData') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    locale: Optional[BlogLocale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pages: Optional[BlogPages] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    posts: Optional[BlogPosts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[BlogStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
