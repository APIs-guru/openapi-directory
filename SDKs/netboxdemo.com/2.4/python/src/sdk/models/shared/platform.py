from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlatformLegacyRPCClientEnum(str, Enum):
    JUNIPER_JUNOS = "juniper-junos"
    CISCO_IOS = "cisco-ios"
    OPENGEAR = "opengear"


@dataclass_json
@dataclass
class Platform:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    manufacturer: Optional[NestedManufacturer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    napalm_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_args') }})
    napalm_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_driver') }})
    rpc_client: Optional[PlatformLegacyRPCClientEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpc_client') }})
    
