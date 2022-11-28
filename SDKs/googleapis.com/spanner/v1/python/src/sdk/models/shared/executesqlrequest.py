from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecuteSQLRequestQueryModeEnum(str, Enum):
    NORMAL = "NORMAL"
    PLAN = "PLAN"
    PROFILE = "PROFILE"


@dataclass_json
@dataclass
class ExecuteSQLRequest:
    r"""ExecuteSQLRequest
    The request for ExecuteSql and ExecuteStreamingSql.
    """
    
    param_types: Optional[dict[str, Type]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramTypes') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    partition_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionToken') }})
    query_mode: Optional[ExecuteSQLRequestQueryModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryMode') }})
    query_options: Optional[QueryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryOptions') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumeToken') }})
    seqno: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seqno') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    transaction: Optional[TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
