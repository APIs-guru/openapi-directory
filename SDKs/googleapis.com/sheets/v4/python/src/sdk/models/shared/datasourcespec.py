from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigquerydatasourcespec
from . import datasourceparameter


@dataclass_json
@dataclass
class DataSourceSpec:
    big_query: Optional[bigquerydatasourcespec.BigQueryDataSourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuery' }})
    parameters: Optional[List[datasourceparameter.DataSourceParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
