from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import posixaccount
from . import securitykey
from . import sshpublickey


@dataclass_json
@dataclass
class LoginProfile:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    posix_accounts: Optional[List[posixaccount.PosixAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posixAccounts' }})
    security_keys: Optional[List[securitykey.SecurityKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityKeys' }})
    ssh_public_keys: Optional[dict[str, sshpublickey.SSHPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPublicKeys' }})
    
