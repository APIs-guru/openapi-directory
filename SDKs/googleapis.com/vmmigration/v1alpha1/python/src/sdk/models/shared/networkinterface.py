from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkInterface:
    r"""NetworkInterface
    NetworkInterface represents a NIC of a VM.
    """
    
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    
