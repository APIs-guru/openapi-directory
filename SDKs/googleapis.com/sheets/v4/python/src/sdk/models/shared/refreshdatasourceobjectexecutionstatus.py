from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RefreshDataSourceObjectExecutionStatus:
    r"""RefreshDataSourceObjectExecutionStatus
    The execution status of refreshing one data source object.
    """
    
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    reference: Optional[DataSourceObjectReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    
