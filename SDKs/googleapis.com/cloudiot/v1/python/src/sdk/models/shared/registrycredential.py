from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publickeycertificate


@dataclass_json
@dataclass
class RegistryCredential:
    public_key_certificate: Optional[publickeycertificate.PublicKeyCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyCertificate' }})
    
