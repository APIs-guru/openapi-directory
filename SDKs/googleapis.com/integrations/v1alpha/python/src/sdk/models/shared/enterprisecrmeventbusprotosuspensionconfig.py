from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionConfig:
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMessage') }})
    notifications: Optional[List[EnterpriseCrmEventbusProtoNotification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    suspension_expiration: Optional[EnterpriseCrmEventbusProtoSuspensionExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionExpiration') }})
    who_may_resolve: Optional[List[EnterpriseCrmEventbusProtoSuspensionAuthPermissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whoMayResolve') }})
    
