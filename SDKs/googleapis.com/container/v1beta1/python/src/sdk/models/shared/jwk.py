from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Jwk:
    alg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alg' }})
    crv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crv' }})
    e: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'e' }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kid' }})
    kty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kty' }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    use: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use' }})
    x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x' }})
    y: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y' }})
    
