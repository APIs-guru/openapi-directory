from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import celldata


@dataclass_json
@dataclass
class RowData:
    values: Optional[List[celldata.CellData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
