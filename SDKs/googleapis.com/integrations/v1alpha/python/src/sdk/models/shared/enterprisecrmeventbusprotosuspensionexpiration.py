from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionExpiration:
    expire_after_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAfterMs' }})
    lift_when_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liftWhenExpired' }})
    remind_after_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remindAfterMs' }})
    
