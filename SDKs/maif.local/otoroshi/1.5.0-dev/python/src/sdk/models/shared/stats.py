from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Stats:
    r"""Stats
    Live stats for a service or globally
    """
    
    calls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls') }})
    concurrent_handled_requests: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentHandledRequests') }})
    data_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataIn') }})
    data_in_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataInRate') }})
    data_out: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataOut') }})
    data_out_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataOutRate') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    overhead: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overhead') }})
    rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    
