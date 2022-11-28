from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PasteDataRequestTypeEnum(str, Enum):
    PASTE_NORMAL = "PASTE_NORMAL"
    PASTE_VALUES = "PASTE_VALUES"
    PASTE_FORMAT = "PASTE_FORMAT"
    PASTE_NO_BORDERS = "PASTE_NO_BORDERS"
    PASTE_FORMULA = "PASTE_FORMULA"
    PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION"
    PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING"


@dataclass_json
@dataclass
class PasteDataRequest:
    r"""PasteDataRequest
    Inserts data into the spreadsheet starting at the specified coordinate.
    """
    
    coordinate: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinate') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiter') }})
    html: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    type: Optional[PasteDataRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
