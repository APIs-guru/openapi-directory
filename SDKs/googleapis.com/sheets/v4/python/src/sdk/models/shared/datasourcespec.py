from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceSpec:
    r"""DataSourceSpec
    This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
    """
    
    big_query: Optional[BigQueryDataSourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuery') }})
    parameters: Optional[List[DataSourceParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
