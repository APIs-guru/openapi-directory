from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publickeycredential


@dataclass_json
@dataclass
class DeviceCredential:
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    public_key: Optional[publickeycredential.PublicKeyCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    
