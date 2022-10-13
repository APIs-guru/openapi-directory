from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference


@dataclass_json
@dataclass
class DataSourceSheetDimensionRange:
    column_references: Optional[List[datasourcecolumnreference.DataSourceColumnReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnReferences' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
