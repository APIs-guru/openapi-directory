from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RPCRequest:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jsonrpc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonrpc' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    params: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    
