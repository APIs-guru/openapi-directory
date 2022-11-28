from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidationAuthority:
    r"""ValidationAuthority
    Settings to access a validation authority server
    """
    
    always_valid: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysValid') }})
    bad_ttl: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('badTtl') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    good_ttl: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodTtl') }})
    headers: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no_cache: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('noCache') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
