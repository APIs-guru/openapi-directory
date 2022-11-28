from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessagePart:
    r"""MessagePart
    A single MIME message part.
    """
    
    body: Optional[MessagePartBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    headers: Optional[List[MessagePartHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partId') }})
    parts: Optional[List[MessagePart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    
