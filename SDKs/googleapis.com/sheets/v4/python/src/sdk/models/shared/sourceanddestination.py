from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridrange

class SourceAndDestinationDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class SourceAndDestination:
    dimension: Optional[SourceAndDestinationDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    fill_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fillLength' }})
    source: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
