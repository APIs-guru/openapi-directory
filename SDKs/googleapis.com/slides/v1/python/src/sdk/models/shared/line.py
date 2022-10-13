from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lineproperties

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
    line_category: Optional[LineLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineCategory' }})
    line_properties: Optional[lineproperties.LineProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineProperties' }})
    line_type: Optional[LineLineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineType' }})
    
