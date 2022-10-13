from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionproperties
from . import rowdata
from . import dimensionproperties


@dataclass_json
@dataclass
class GridData:
    column_metadata: Optional[List[dimensionproperties.DimensionProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnMetadata' }})
    row_data: Optional[List[rowdata.RowData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowData' }})
    row_metadata: Optional[List[dimensionproperties.DimensionProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowMetadata' }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startColumn' }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startRow' }})
    
