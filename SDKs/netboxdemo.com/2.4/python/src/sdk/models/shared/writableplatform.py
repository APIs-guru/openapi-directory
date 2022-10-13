from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WritablePlatformRPCClientLegacyRPCClientEnum(str, Enum):
    JUNIPER_JUNOS = "juniper-junos"
    CISCO_IOS = "cisco-ios"
    OPENGEAR = "opengear"


@dataclass_json
@dataclass
class WritablePlatform:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manufacturer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    napalm_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'napalm_args' }})
    napalm_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'napalm_driver' }})
    rpc_client: Optional[WritablePlatformRPCClientLegacyRPCClientEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rpc_client' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
