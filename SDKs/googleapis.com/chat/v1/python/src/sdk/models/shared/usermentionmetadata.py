from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserMentionMetadataTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ADD = "ADD"
    MENTION = "MENTION"


@dataclass_json
@dataclass
class UserMentionMetadata:
    r"""UserMentionMetadata
    Annotation metadata for user mentions (@).
    """
    
    type: Optional[UserMentionMetadataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
