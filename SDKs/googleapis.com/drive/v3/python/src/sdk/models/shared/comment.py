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
class CommentQuotedFileContent:
    r"""CommentQuotedFileContent
    The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
    """
    
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Comment:
    r"""Comment
    A comment on a file.
    """
    
    anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anchor') }})
    author: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlContent') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    quoted_file_content: Optional[CommentQuotedFileContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotedFileContent') }})
    replies: Optional[List[Reply]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    resolved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolved') }})
    
