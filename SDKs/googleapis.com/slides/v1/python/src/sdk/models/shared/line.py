from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LineLineCategoryEnum(str, Enum):
    LINE_CATEGORY_UNSPECIFIED = "LINE_CATEGORY_UNSPECIFIED"
    STRAIGHT = "STRAIGHT"
    BENT = "BENT"
    CURVED = "CURVED"

class LineLineTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    STRAIGHT_CONNECTOR_1 = "STRAIGHT_CONNECTOR_1"
    BENT_CONNECTOR_2 = "BENT_CONNECTOR_2"
    BENT_CONNECTOR_3 = "BENT_CONNECTOR_3"
    BENT_CONNECTOR_4 = "BENT_CONNECTOR_4"
    BENT_CONNECTOR_5 = "BENT_CONNECTOR_5"
    CURVED_CONNECTOR_2 = "CURVED_CONNECTOR_2"
    CURVED_CONNECTOR_3 = "CURVED_CONNECTOR_3"
    CURVED_CONNECTOR_4 = "CURVED_CONNECTOR_4"
    CURVED_CONNECTOR_5 = "CURVED_CONNECTOR_5"
    STRAIGHT_LINE = "STRAIGHT_LINE"


@dataclass_json
@dataclass
class Line:
    r"""Line
    A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
    """
    
    line_category: Optional[LineLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineCategory') }})
    line_properties: Optional[LineProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineProperties') }})
    line_type: Optional[LineLineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineType') }})
    
