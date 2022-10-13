from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimension

class TableColumnPropertiesWidthTypeEnum(str, Enum):
    WIDTH_TYPE_UNSPECIFIED = "WIDTH_TYPE_UNSPECIFIED"
    EVENLY_DISTRIBUTED = "EVENLY_DISTRIBUTED"
    FIXED_WIDTH = "FIXED_WIDTH"


@dataclass_json
@dataclass
class TableColumnProperties:
    width: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    width_type: Optional[TableColumnPropertiesWidthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthType' }})
    
