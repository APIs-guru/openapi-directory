from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PosixAccountOperatingSystemTypeEnum(str, Enum):
    OPERATING_SYSTEM_TYPE_UNSPECIFIED = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    LINUX = "LINUX"
    WINDOWS = "WINDOWS"


@dataclass_json
@dataclass
class PosixAccount:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    gecos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gecos' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeDirectory' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operating_system_type: Optional[PosixAccountOperatingSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemType' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    shell: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shell' }})
    system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemId' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
