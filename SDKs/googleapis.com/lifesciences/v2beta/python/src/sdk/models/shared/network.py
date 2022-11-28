from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Network:
    r"""Network
    VM networking options.
    """
    
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    use_private_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usePrivateAddress') }})
    
