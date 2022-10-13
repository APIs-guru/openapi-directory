from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import type
from . import queryoptions
from . import requestoptions
from . import transactionselector

class ExecuteSQLRequestQueryModeEnum(str, Enum):
    NORMAL = "NORMAL"
    PLAN = "PLAN"
    PROFILE = "PROFILE"


@dataclass_json
@dataclass
class ExecuteSQLRequest:
    param_types: Optional[dict[str, type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramTypes' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    partition_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionToken' }})
    query_mode: Optional[ExecuteSQLRequestQueryModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryMode' }})
    query_options: Optional[queryoptions.QueryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryOptions' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumeToken' }})
    seqno: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seqno' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    transaction: Optional[transactionselector.TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
