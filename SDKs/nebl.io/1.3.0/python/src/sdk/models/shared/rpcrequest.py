from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RPCRequest:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jsonrpc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonrpc') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    params: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
