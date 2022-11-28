from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig
    Defines the configuration to be used for creating workers in the worker pool.
    """
    
    accelerator: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerator') }})
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    max_concurrent_actions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentActions') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    network_access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkAccess') }})
    reserved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reserved') }})
    sole_tenant_node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soleTenantNodeType') }})
    vm_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    
