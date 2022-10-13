from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridcoordinate
from . import gridcoordinate
from . import gridcoordinate


@dataclass_json
@dataclass
class DataSourceObjectReference:
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    data_source_formula_cell: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceFormulaCell' }})
    data_source_pivot_table_anchor_cell: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourcePivotTableAnchorCell' }})
    data_source_table_anchor_cell: Optional[gridcoordinate.GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceTableAnchorCell' }})
    sheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
