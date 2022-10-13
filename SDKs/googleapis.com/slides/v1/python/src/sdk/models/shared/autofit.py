from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AutofitAutofitTypeEnum(str, Enum):
    AUTOFIT_TYPE_UNSPECIFIED = "AUTOFIT_TYPE_UNSPECIFIED"
    NONE = "NONE"
    TEXT_AUTOFIT = "TEXT_AUTOFIT"
    SHAPE_AUTOFIT = "SHAPE_AUTOFIT"


@dataclass_json
@dataclass
class Autofit:
    autofit_type: Optional[AutofitAutofitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autofitType' }})
    font_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontScale' }})
    line_spacing_reduction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSpacingReduction' }})
    
