from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LatencyInjectionFaultConfig:
    r"""LatencyInjectionFaultConfig
    Config for large latency injection fault
    """
    
    from_: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
