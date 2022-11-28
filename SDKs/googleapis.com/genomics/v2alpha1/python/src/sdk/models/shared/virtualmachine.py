from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualMachine:
    r"""VirtualMachine
    Carries information about a Compute Engine VM resource.
    """
    
    accelerators: Optional[List[Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    boot_disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuPlatform') }})
    disks: Optional[List[Disk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    docker_cache_images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerCacheImages') }})
    enable_stackdriver_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverMonitoring') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    network: Optional[Network] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nvidia_driver_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nvidiaDriverVersion') }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservation') }})
    service_account: Optional[ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
