from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SmimeInfo:
    encrypted_key_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedKeyPassword' }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    issuer_cn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerCn' }})
    pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pem' }})
    pkcs12: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pkcs12' }})
    
