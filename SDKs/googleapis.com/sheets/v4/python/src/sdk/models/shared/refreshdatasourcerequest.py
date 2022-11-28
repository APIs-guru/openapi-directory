from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RefreshDataSourceRequest:
    r"""RefreshDataSourceRequest
    Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
    """
    
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    is_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAll') }})
    references: Optional[DataSourceObjectReferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    
