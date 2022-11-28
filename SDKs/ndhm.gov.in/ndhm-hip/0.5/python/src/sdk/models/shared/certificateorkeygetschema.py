from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateOrKeyGetSchema:
    alg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alg') }})
    e: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e') }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kid') }})
    kty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kty') }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('n') }})
    use: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use') }})
    x5c: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x5c') }})
    x5t: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x5t') }})
    x5t_number_s256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x5t#S256') }})
    
