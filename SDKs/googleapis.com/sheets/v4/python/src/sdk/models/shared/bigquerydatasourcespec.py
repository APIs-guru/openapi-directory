from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigqueryqueryspec
from . import bigquerytablespec


@dataclass_json
@dataclass
class BigQueryDataSourceSpec:
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    query_spec: Optional[bigqueryqueryspec.BigQueryQuerySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'querySpec' }})
    table_spec: Optional[bigquerytablespec.BigQueryTableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableSpec' }})
    
