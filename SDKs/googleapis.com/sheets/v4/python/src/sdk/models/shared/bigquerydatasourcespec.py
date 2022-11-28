from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigQueryDataSourceSpec:
    r"""BigQueryDataSourceSpec
    The specification of a BigQuery data source that's connected to a sheet.
    """
    
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    query_spec: Optional[BigQueryQuerySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('querySpec') }})
    table_spec: Optional[BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableSpec') }})
    
