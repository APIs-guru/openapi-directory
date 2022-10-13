from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourceobjectreferences


@dataclass_json
@dataclass
class RefreshDataSourceRequest:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    is_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAll' }})
    references: Optional[datasourceobjectreferences.DataSourceObjectReferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    
