from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessTokenInfoResponse:
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    expires_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    hub_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_id') }})
    scope_to_scope_group_pks: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_to_scope_group_pks') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    trial_scope_to_scope_group_pks: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_scope_to_scope_group_pks') }})
    trial_scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_scopes') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    hub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_domain') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
