from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutofitAutofitTypeEnum(str, Enum):
    AUTOFIT_TYPE_UNSPECIFIED = "AUTOFIT_TYPE_UNSPECIFIED"
    NONE = "NONE"
    TEXT_AUTOFIT = "TEXT_AUTOFIT"
    SHAPE_AUTOFIT = "SHAPE_AUTOFIT"


@dataclass_json
@dataclass
class Autofit:
    r"""Autofit
    The autofit properties of a Shape.
    """
    
    autofit_type: Optional[AutofitAutofitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autofitType') }})
    font_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontScale') }})
    line_spacing_reduction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSpacingReduction') }})
    
