from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BaselineValueFormatComparisonTypeEnum(str, Enum):
    COMPARISON_TYPE_UNDEFINED = "COMPARISON_TYPE_UNDEFINED"
    ABSOLUTE_DIFFERENCE = "ABSOLUTE_DIFFERENCE"
    PERCENTAGE_DIFFERENCE = "PERCENTAGE_DIFFERENCE"


@dataclass_json
@dataclass
class BaselineValueFormat:
    r"""BaselineValueFormat
    Formatting options for baseline value.
    """
    
    comparison_type: Optional[BaselineValueFormatComparisonTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    negative_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColor') }})
    negative_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColorStyle') }})
    position: Optional[TextPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    positive_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColor') }})
    positive_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColorStyle') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
