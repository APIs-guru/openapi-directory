from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import universaltwofactor
from . import webauthn


@dataclass_json
@dataclass
class SecurityKey:
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    universal_two_factor: Optional[universaltwofactor.UniversalTwoFactor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'universalTwoFactor' }})
    web_authn: Optional[webauthn.WebAuthn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webAuthn' }})
    
