from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dsapublickeyinfo
from . import rsapublickeyinfo


@dataclass_json
@dataclass
class IdpCredential:
    dsa_key_info: Optional[dsapublickeyinfo.DsaPublicKeyInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsaKeyInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rsa_key_info: Optional[rsapublickeyinfo.RsaPublicKeyInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rsaKeyInfo' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
