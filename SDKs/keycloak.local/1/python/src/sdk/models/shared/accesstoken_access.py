from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessTokenAccess:
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    verify_caller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verify_caller') }})
    
