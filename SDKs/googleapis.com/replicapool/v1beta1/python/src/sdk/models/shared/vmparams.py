from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import existingdisk
from . import newdisk
from . import metadata
from . import networkinterface
from . import serviceaccount
from . import tag


@dataclass_json
@dataclass
class VMParams:
    base_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseInstanceName' }})
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canIpForward' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disks_to_attach: Optional[List[existingdisk.ExistingDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disksToAttach' }})
    disks_to_create: Optional[List[newdisk.NewDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disksToCreate' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    on_host_maintenance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onHostMaintenance' }})
    service_accounts: Optional[List[serviceaccount.ServiceAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccounts' }})
    tags: Optional[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
