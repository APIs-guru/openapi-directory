from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import devices
from . import linodeconfiginterface


@dataclass_json
@dataclass
class LinodeConfigHelpers:
    devtmpfs_automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devtmpfs_automount' }})
    distro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distro' }})
    modules_dep: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modules_dep' }})
    network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    updatedb_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedb_disabled' }})
    
class LinodeConfigRunLevelEnum(str, Enum):
    DEFAULT = "default"
    SINGLE = "single"
    BINBASH = "binbash"

class LinodeConfigVirtModeEnum(str, Enum):
    PARAVIRT = "paravirt"
    FULLVIRT = "fullvirt"


@dataclass_json
@dataclass
class LinodeConfig:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    devices: devices.Devices = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    helpers: Optional[LinodeConfigHelpers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpers' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interfaces: Optional[List[linodeconfiginterface.LinodeConfigInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaces' }})
    kernel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernel' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    memory_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_limit' }})
    root_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_device' }})
    run_level: Optional[LinodeConfigRunLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_level' }})
    virt_mode: Optional[LinodeConfigVirtModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virt_mode' }})
    
