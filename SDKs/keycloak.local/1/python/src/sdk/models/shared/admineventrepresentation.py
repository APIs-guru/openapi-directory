from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminEventRepresentation:
    auth_details: Optional[AuthDetailsRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDetails') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    operation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    realm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realmId') }})
    representation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('representation') }})
    resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePath') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
