from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryResponse:
    r"""QueryResponse
    Response message for TargetedQueriesService.Query.
    """
    
    column_headers: Optional[List[ResultTableColumnHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rows: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
