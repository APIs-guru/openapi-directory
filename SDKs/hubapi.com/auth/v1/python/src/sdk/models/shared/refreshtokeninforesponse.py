from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RefreshTokenInfoResponse:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    hub_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_id') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    hub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_domain') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
