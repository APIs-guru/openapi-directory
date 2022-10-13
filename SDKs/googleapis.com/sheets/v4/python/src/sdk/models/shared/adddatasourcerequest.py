from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasource


@dataclass_json
@dataclass
class AddDataSourceRequest:
    data_source: Optional[datasource.DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    
