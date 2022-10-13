from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import keyobject


@dataclass_json
@dataclass
class KeyMaterial:
    crypto_alg: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoAlg' }})
    curve: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curve' }})
    dh_public_key: keyobject.KeyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhPublicKey' }})
    nonce: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    
