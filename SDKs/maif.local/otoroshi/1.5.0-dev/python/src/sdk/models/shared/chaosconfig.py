from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import badresponsesfaultconfig
from . import largerequestfaultconfig
from . import largeresponsefaultconfig
from . import latencyinjectionfaultconfig


@dataclass_json
@dataclass
class ChaosConfig:
    bad_responses_fault_config: Optional[badresponsesfaultconfig.BadResponsesFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badResponsesFaultConfig' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    large_request_fault_config: Optional[largerequestfaultconfig.LargeRequestFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeRequestFaultConfig' }})
    large_response_fault_config: Optional[largeresponsefaultconfig.LargeResponseFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeResponseFaultConfig' }})
    latency_injection_fault_config: Optional[latencyinjectionfaultconfig.LatencyInjectionFaultConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latencyInjectionFaultConfig' }})
    
