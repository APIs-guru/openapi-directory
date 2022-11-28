from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SuffixOptionEnum(str, Enum):
    OPTION_UNSPECIFIED = "OPTION_UNSPECIFIED"
    UNGUESSABLE = "UNGUESSABLE"
    SHORT = "SHORT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class Suffix:
    r"""Suffix
    Short Dynamic Link suffix.
    """
    
    custom_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSuffix') }})
    option: Optional[SuffixOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    
