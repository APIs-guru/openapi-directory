from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumn
from . import datasourcespec


@dataclass_json
@dataclass
class DataSource:
    calculated_columns: Optional[List[datasourcecolumn.DataSourceColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculatedColumns' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    spec: Optional[datasourcespec.DataSourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
