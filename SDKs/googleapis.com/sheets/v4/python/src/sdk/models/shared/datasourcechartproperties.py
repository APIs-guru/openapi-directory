from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceChartProperties:
    r"""DataSourceChartProperties
    Properties of a data source chart.
    """
    
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    
