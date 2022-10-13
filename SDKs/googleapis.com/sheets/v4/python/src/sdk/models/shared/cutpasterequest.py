from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridcoordinate
from . import gridrange

class CutPasteRequestPasteTypeEnum(str, Enum):
    PASTE_NORMAL = "PASTE_NORMAL"
    PASTE_VALUES = "PASTE_VALUES"
    PASTE_FORMAT = "PASTE_FORMAT"
    PASTE_NO_BORDERS = "PASTE_NO_BORDERS"
    PASTE_FORMULA = "PASTE_FORMULA"
    PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION"
    PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING"


@dataclass_json
@dataclass
class CutPasteRequest:
    destination: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    paste_type: Optional[CutPasteRequestPasteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pasteType' }})
    source: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
