from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinodeTypeAddonsBackupsPrice:
    hourly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly' }})
    monthly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    

@dataclass_json
@dataclass
class LinodeTypeAddonsBackups:
    price: Optional[LinodeTypeAddonsBackupsPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class LinodeTypeAddons:
    backups: Optional[LinodeTypeAddonsBackups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups' }})
    
class LinodeTypeClassEnum(str, Enum):
    NANODE = "nanode"
    STANDARD = "standard"
    DEDICATED = "dedicated"
    GPU = "gpu"
    HIGHMEM = "highmem"


@dataclass_json
@dataclass
class LinodeTypePrice:
    hourly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly' }})
    monthly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    

@dataclass_json
@dataclass
class LinodeType:
    addons: Optional[LinodeTypeAddons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addons' }})
    class_: Optional[LinodeTypeClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'class' }})
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    gpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpus' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    network_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_out' }})
    price: Optional[LinodeTypePrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    successor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successor' }})
    transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    
