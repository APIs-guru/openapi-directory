from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataLabelPlacementEnum(str, Enum):
    DATA_LABEL_PLACEMENT_UNSPECIFIED = "DATA_LABEL_PLACEMENT_UNSPECIFIED"
    CENTER = "CENTER"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    ABOVE = "ABOVE"
    BELOW = "BELOW"
    INSIDE_END = "INSIDE_END"
    INSIDE_BASE = "INSIDE_BASE"
    OUTSIDE_END = "OUTSIDE_END"

class DataLabelTypeEnum(str, Enum):
    DATA_LABEL_TYPE_UNSPECIFIED = "DATA_LABEL_TYPE_UNSPECIFIED"
    NONE = "NONE"
    DATA = "DATA"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class DataLabel:
    r"""DataLabel
    Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
    """
    
    custom_label_data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabelData') }})
    placement: Optional[DataLabelPlacementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    type: Optional[DataLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
