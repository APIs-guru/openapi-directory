from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Stats:
    calls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls' }})
    concurrent_handled_requests: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentHandledRequests' }})
    data_in: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataIn' }})
    data_in_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataInRate' }})
    data_out: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataOut' }})
    data_out_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataOutRate' }})
    duration: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    overhead: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overhead' }})
    rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    
