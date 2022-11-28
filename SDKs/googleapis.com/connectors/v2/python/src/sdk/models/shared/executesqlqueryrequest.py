from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteSQLQueryRequest:
    r"""ExecuteSQLQueryRequest
    An execute sql query request containing the query and the connection to execute it on.
    """
    
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
