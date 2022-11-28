from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecuteSQLQueryResponse:
    r"""ExecuteSQLQueryResponse
    A response returned by the connection after executing the sql query.
    """
    
    results: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
