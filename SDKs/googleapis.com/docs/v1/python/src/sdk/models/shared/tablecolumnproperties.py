from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableColumnPropertiesWidthTypeEnum(str, Enum):
    WIDTH_TYPE_UNSPECIFIED = "WIDTH_TYPE_UNSPECIFIED"
    EVENLY_DISTRIBUTED = "EVENLY_DISTRIBUTED"
    FIXED_WIDTH = "FIXED_WIDTH"


@dataclass_json
@dataclass
class TableColumnProperties:
    r"""TableColumnProperties
    The properties of a column in a table.
    """
    
    width: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    width_type: Optional[TableColumnPropertiesWidthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthType') }})
    
