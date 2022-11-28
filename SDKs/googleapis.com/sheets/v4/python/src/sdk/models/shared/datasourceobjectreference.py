from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceObjectReference:
    r"""DataSourceObjectReference
    Reference to a data source object.
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    data_source_formula_cell: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceFormulaCell') }})
    data_source_pivot_table_anchor_cell: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourcePivotTableAnchorCell') }})
    data_source_table_anchor_cell: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceTableAnchorCell') }})
    sheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
