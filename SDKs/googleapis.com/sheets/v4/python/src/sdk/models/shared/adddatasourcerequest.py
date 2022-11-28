from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddDataSourceRequest:
    r"""AddDataSourceRequest
    Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.
    """
    
    data_source: Optional[DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    
