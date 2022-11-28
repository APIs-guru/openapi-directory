from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentReply:
    r"""CommentReply
    A comment on a file in Google Drive.
    """
    
    author: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlContent') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reply_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyId') }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    
