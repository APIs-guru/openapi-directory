from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChaosConfig:
    r"""ChaosConfig
    Configuration for the faults that can be injected in requests
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    bad_responses_fault_config: Optional[BadResponsesFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badResponsesFaultConfig') }})
    large_request_fault_config: Optional[LargeRequestFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeRequestFaultConfig') }})
    large_response_fault_config: Optional[LargeResponseFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeResponseFaultConfig') }})
    latency_injection_fault_config: Optional[LatencyInjectionFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyInjectionFaultConfig') }})
    
