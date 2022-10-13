from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chartdata
from . import textformat

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
    custom_label_data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabelData' }})
    placement: Optional[DataLabelPlacementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement' }})
    text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormat' }})
    type: Optional[DataLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
