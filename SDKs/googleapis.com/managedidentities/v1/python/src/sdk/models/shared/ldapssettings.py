from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificate

class LdapsSettingsStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class LdapsSettings:
    certificate: Optional[certificate.Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    certificate_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePassword' }})
    certificate_pfx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePfx' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[LdapsSettingsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
