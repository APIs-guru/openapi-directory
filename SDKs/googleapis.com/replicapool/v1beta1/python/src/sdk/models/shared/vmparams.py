from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VMParams:
    r"""VMParams
    Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
    """
    
    base_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseInstanceName') }})
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canIpForward') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disks_to_attach: Optional[List[ExistingDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disksToAttach') }})
    disks_to_create: Optional[List[NewDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disksToCreate') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[Metadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    on_host_maintenance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHostMaintenance') }})
    service_accounts: Optional[List[ServiceAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccounts') }})
    tags: Optional[Tag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
