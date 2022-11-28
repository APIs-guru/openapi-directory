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
class Message:
    r"""Message
    An email message.
    """
    
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalDate') }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelIds') }})
    payload: Optional[MessagePart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    size_estimate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeEstimate') }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    thread_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadId') }})
    
