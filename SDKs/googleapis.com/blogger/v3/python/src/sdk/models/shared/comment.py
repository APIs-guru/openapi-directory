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
class CommentAuthorImage:
    r"""CommentAuthorImage
    The creator's avatar.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommentAuthor:
    r"""CommentAuthor
    The author of this Comment.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[CommentAuthorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommentBlog:
    r"""CommentBlog
    Data about the blog containing this comment.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CommentInReplyTo:
    r"""CommentInReplyTo
    Data about the comment this is in reply to.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CommentPost:
    r"""CommentPost
    Data about the post containing this comment.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class CommentStatusEnum(str, Enum):
    LIVE = "LIVE"
    EMPTIED = "EMPTIED"
    PENDING = "PENDING"
    SPAM = "SPAM"


@dataclass_json
@dataclass
class Comment:
    author: Optional[CommentAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    blog: Optional[CommentBlog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_reply_to: Optional[CommentInReplyTo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inReplyTo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    post: Optional[CommentPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[CommentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
