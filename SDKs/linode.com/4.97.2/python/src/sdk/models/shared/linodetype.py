from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinodeTypeAddonsBackupsPrice:
    r"""LinodeTypeAddonsBackupsPrice
    Cost of enabling Backups for this Linode Type.
    """
    
    hourly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly') }})
    monthly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    

@dataclass_json
@dataclass
class LinodeTypeAddonsBackups:
    r"""LinodeTypeAddonsBackups
    Information about the optional Backup service offered for Linodes.
    
    """
    
    price: Optional[LinodeTypeAddonsBackupsPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class LinodeTypeAddons:
    r"""LinodeTypeAddons
    A list of optional add-on services for Linodes and their associated costs.
    
    """
    
    backups: Optional[LinodeTypeAddonsBackups] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    
class LinodeTypeClassEnum(str, Enum):
    NANODE = "nanode"
    STANDARD = "standard"
    DEDICATED = "dedicated"
    GPU = "gpu"
    HIGHMEM = "highmem"


@dataclass_json
@dataclass
class LinodeTypePrice:
    r"""LinodeTypePrice
    Cost in US dollars, broken down into hourly and monthly charges.
    
    """
    
    hourly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly') }})
    monthly: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    

@dataclass_json
@dataclass
class LinodeType:
    r"""LinodeType
    Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
    
    """
    
    addons: Optional[LinodeTypeAddons] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addons') }})
    class_: Optional[LinodeTypeClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('class') }})
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    gpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpus') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    network_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_out') }})
    price: Optional[LinodeTypePrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    successor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successor') }})
    transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
