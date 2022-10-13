from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClientConfig:
    backoff_factor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backoffFactor' }})
    call_timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callTimeout' }})
    global_timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalTimeout' }})
    max_errors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxErrors' }})
    retries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    retry_initial_delay: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryInitialDelay' }})
    sample_interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleInterval' }})
    use_circuit_breaker: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCircuitBreaker' }})
    
