from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthToken:
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authToken') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
