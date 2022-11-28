from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthenticationExecutionRepresentation:
    authenticator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticator') }})
    authenticator_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorConfig') }})
    authenticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorFlow') }})
    autheticator_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autheticatorFlow') }})
    flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parent_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFlow') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirement') }})
    
