from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentContext:
    r"""CommentContext
    The context of the file which is being commented on.
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Comment:
    r"""Comment
    A comment on a file in Google Drive.
    """
    
    anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anchor') }})
    author: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    comment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentId') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    context: Optional[CommentContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    file_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileTitle') }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlContent') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replies: Optional[List[CommentReply]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
