from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import textposition
from . import color
from . import colorstyle
from . import textformat

class BaselineValueFormatComparisonTypeEnum(str, Enum):
    COMPARISON_TYPE_UNDEFINED = "COMPARISON_TYPE_UNDEFINED"
    ABSOLUTE_DIFFERENCE = "ABSOLUTE_DIFFERENCE"
    PERCENTAGE_DIFFERENCE = "PERCENTAGE_DIFFERENCE"


@dataclass_json
@dataclass
class BaselineValueFormat:
    comparison_type: Optional[BaselineValueFormatComparisonTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    negative_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeColor' }})
    negative_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeColorStyle' }})
    position: Optional[textposition.TextPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    positive_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positiveColor' }})
    positive_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positiveColorStyle' }})
    text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormat' }})
    
