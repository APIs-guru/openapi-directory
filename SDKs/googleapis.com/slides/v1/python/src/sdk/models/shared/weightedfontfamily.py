from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WeightedFontFamily:
    r"""WeightedFontFamily
    Represents a font family and weight used to style a TextRun.
    """
    
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontFamily') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
