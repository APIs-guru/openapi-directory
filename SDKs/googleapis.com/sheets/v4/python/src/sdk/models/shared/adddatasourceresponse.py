from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddDataSourceResponse:
    r"""AddDataSourceResponse
    The result of adding a data source.
    """
    
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source: Optional[DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    
