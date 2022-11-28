from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserSessionRepresentation:
    clients: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clients') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    last_access: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAccess') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
