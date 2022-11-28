from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceSheetProperties:
    r"""DataSourceSheetProperties
    Additional properties of a DATA_SOURCE sheet.
    """
    
    columns: Optional[List[DataSourceColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    
