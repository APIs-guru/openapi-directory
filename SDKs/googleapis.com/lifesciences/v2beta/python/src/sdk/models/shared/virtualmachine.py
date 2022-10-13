from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accelerator
from . import disk
from . import network
from . import serviceaccount
from . import volume


@dataclass_json
@dataclass
class VirtualMachine:
    accelerators: Optional[List[accelerator.Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelerators' }})
    boot_disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskSizeGb' }})
    boot_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootImage' }})
    cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuPlatform' }})
    disks: Optional[List[disk.Disk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    docker_cache_images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerCacheImages' }})
    enable_stackdriver_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverMonitoring' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    network: Optional[network.Network] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    nvidia_driver_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nvidiaDriverVersion' }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preemptible' }})
    reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation' }})
    service_account: Optional[serviceaccount.ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
