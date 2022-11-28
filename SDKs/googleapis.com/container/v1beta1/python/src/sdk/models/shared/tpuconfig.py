from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TpuConfig:
    r"""TpuConfig
    Configuration for Cloud TPU.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4CidrBlock') }})
    use_service_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useServiceNetworking') }})
    
