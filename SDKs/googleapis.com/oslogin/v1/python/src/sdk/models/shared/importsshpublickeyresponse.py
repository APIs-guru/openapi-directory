from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loginprofile


@dataclass_json
@dataclass
class ImportSSHPublicKeyResponse:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    login_profile: Optional[loginprofile.LoginProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginProfile' }})
    
