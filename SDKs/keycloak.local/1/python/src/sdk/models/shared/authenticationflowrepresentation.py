from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthenticationFlowRepresentation:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    authentication_executions: Optional[List[AuthenticationExecutionExportRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationExecutions') }})
    built_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtIn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    top_level: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevel') }})
    
