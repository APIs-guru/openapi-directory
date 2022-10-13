from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pivotgroup
from . import pivotfiltercriteria
from . import dataexecutionstatus
from . import pivotfilterspec
from . import pivotgroup
from . import gridrange
from . import pivotvalue

class PivotTableValueLayoutEnum(str, Enum):
    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"


@dataclass_json
@dataclass
class PivotTable:
    columns: Optional[List[pivotgroup.PivotGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    criteria: Optional[dict[str, pivotfiltercriteria.PivotFilterCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteria' }})
    data_execution_status: Optional[dataexecutionstatus.DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataExecutionStatus' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    filter_specs: Optional[List[pivotfilterspec.PivotFilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterSpecs' }})
    rows: Optional[List[pivotgroup.PivotGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    source: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    value_layout: Optional[PivotTableValueLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueLayout' }})
    values: Optional[List[pivotvalue.PivotValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
