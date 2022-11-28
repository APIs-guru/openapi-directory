from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthenticationExecutionExportRepresentation:
    authenticator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticator') }})
    authenticator_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorConfig') }})
    authenticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorFlow') }})
    autheticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autheticatorFlow') }})
    flow_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowAlias') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirement') }})
    user_setup_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSetupAllowed') }})
    
