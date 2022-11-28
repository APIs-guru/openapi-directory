from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClientConfig:
    r"""ClientConfig
    The configuration of the circuit breaker for a service descriptor
    """
    
    backoff_factor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backoffFactor') }})
    call_timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callTimeout') }})
    global_timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalTimeout') }})
    max_errors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxErrors') }})
    retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    retry_initial_delay: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryInitialDelay') }})
    sample_interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleInterval') }})
    use_circuit_breaker: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCircuitBreaker') }})
    
