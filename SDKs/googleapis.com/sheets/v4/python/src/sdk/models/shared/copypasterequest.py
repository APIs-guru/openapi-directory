from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CopyPasteRequestPasteOrientationEnum(str, Enum):
    NORMAL = "NORMAL"
    TRANSPOSE = "TRANSPOSE"

class CopyPasteRequestPasteTypeEnum(str, Enum):
    PASTE_NORMAL = "PASTE_NORMAL"
    PASTE_VALUES = "PASTE_VALUES"
    PASTE_FORMAT = "PASTE_FORMAT"
    PASTE_NO_BORDERS = "PASTE_NO_BORDERS"
    PASTE_FORMULA = "PASTE_FORMULA"
    PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION"
    PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING"


@dataclass_json
@dataclass
class CopyPasteRequest:
    r"""CopyPasteRequest
    Copies data from the source to the destination.
    """
    
    destination: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    paste_orientation: Optional[CopyPasteRequestPasteOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasteOrientation') }})
    paste_type: Optional[CopyPasteRequestPasteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasteType') }})
    source: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
