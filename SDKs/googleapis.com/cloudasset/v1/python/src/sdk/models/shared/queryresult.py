from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryResult:
    r"""QueryResult
    Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rows: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    schema: Optional[TableSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    total_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRows') }})
    
