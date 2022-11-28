from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PivotTableValueLayoutEnum(str, Enum):
    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"


@dataclass_json
@dataclass
class PivotTable:
    r"""PivotTable
    A pivot table.
    """
    
    columns: Optional[List[PivotGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    criteria: Optional[dict[str, PivotFilterCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    filter_specs: Optional[List[PivotFilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    rows: Optional[List[PivotGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    source: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    value_layout: Optional[PivotTableValueLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueLayout') }})
    values: Optional[List[PivotValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
