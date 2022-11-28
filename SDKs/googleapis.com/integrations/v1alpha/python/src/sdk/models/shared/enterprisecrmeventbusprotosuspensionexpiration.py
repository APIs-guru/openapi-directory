from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionExpiration:
    expire_after_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAfterMs') }})
    lift_when_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liftWhenExpired') }})
    remind_after_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remindAfterMs') }})
    
