from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TokenResponseIf:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    token_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id_token') }})
    
