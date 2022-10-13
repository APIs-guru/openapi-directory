from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecondDerivativeElevationGrid:
    altitude_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altitudeMultiplier' }})
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnCount' }})
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedData' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    
