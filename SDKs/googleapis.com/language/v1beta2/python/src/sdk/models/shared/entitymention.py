from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EntityMentionTypeEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclass
class EntityMention:
    r"""EntityMention
    Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
    """
    
    sentiment: Optional[Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[TextSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[EntityMentionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
