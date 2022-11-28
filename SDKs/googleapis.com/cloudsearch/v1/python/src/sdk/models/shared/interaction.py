from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InteractionTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    VIEW = "VIEW"
    EDIT = "EDIT"


@dataclass_json
@dataclass
class Interaction:
    r"""Interaction
    Represents an interaction between a user and an item.
    """
    
    interaction_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionTime') }})
    principal: Optional[Principal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    type: Optional[InteractionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
