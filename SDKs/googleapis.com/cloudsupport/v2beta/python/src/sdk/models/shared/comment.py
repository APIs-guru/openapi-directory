from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Comment:
    r"""Comment
    A comment associated with a support case.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[Actor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    plain_text_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plainTextBody') }})
    

@dataclass_json
@dataclass
class CommentInput:
    r"""CommentInput
    A comment associated with a support case.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    creator: Optional[ActorInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    
