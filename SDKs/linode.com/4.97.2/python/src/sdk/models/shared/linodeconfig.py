from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinodeConfigHelpers:
    r"""LinodeConfigHelpers
    Helpers enabled when booting to this Linode Config.
    """
    
    devtmpfs_automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devtmpfs_automount') }})
    distro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distro') }})
    modules_dep: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modules_dep') }})
    network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    updatedb_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedb_disabled') }})
    
class LinodeConfigRunLevelEnum(str, Enum):
    DEFAULT = "default"
    SINGLE = "single"
    BINBASH = "binbash"

class LinodeConfigVirtModeEnum(str, Enum):
    PARAVIRT = "paravirt"
    FULLVIRT = "fullvirt"


@dataclass_json
@dataclass
class LinodeConfigInput:
    devices: Devices = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    helpers: Optional[LinodeConfigHelpers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpers') }})
    interfaces: Optional[List[LinodeConfigInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaces') }})
    kernel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel') }})
    memory_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_limit') }})
    root_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_device') }})
    run_level: Optional[LinodeConfigRunLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_level') }})
    virt_mode: Optional[LinodeConfigVirtModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virt_mode') }})
    

@dataclass_json
@dataclass
class LinodeConfig:
    devices: Devices = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    helpers: Optional[LinodeConfigHelpers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpers') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interfaces: Optional[List[LinodeConfigInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaces') }})
    kernel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel') }})
    memory_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_limit') }})
    root_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_device') }})
    run_level: Optional[LinodeConfigRunLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_level') }})
    virt_mode: Optional[LinodeConfigVirtModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virt_mode') }})
    
