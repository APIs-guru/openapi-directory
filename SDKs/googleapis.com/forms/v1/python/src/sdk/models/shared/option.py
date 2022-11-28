from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OptionGoToActionEnum(str, Enum):
    GO_TO_ACTION_UNSPECIFIED = "GO_TO_ACTION_UNSPECIFIED"
    NEXT_SECTION = "NEXT_SECTION"
    RESTART_FORM = "RESTART_FORM"
    SUBMIT_FORM = "SUBMIT_FORM"


@dataclass_json
@dataclass
class Option:
    r"""Option
    An option for a Choice question.
    """
    
    go_to_action: Optional[OptionGoToActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToAction') }})
    go_to_section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToSectionId') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    is_other: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOther') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class OptionInput:
    r"""OptionInput
    An option for a Choice question.
    """
    
    go_to_action: Optional[OptionGoToActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToAction') }})
    go_to_section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToSectionId') }})
    image: Optional[ImageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    is_other: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOther') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
