from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridcoordinate

class PasteDataRequestTypeEnum(str, Enum):
    PASTE_NORMAL = "PASTE_NORMAL"
    PASTE_VALUES = "PASTE_VALUES"
    PASTE_FORMAT = "PASTE_FORMAT"
    PASTE_NO_BORDERS = "PASTE_NO_BORDERS"
    PASTE_FORMULA = "PASTE_FORMULA"
    PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION"
    PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING"


@dataclass_json
@dataclass
class PasteDataRequest:
    coordinate: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinate' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiter' }})
    html: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    type: Optional[PasteDataRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
