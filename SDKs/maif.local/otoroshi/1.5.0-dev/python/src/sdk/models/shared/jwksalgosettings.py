from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JwksAlgoSettings:
    r"""JwksAlgoSettings
    Settings for a JWK set
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    kty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kty') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
