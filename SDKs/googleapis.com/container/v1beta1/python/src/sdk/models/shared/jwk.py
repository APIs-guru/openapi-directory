from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Jwk:
    r"""Jwk
    Jwk is a JSON Web Key as specified in RFC 7517
    """
    
    alg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alg') }})
    crv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crv') }})
    e: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e') }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kid') }})
    kty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kty') }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('n') }})
    use: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use') }})
    x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
