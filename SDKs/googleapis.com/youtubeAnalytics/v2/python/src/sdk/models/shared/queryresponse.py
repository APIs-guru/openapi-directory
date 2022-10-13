from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import resulttablecolumnheader
from . import errors


@dataclass_json
@dataclass
class QueryResponse:
    column_headers: Optional[List[resulttablecolumnheader.ResultTableColumnHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnHeaders' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    rows: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
