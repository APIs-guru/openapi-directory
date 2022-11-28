from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RouterApplianceInstance:
    r"""RouterApplianceInstance
    RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
    """
    
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    network_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterface') }})
    virtual_machine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    
