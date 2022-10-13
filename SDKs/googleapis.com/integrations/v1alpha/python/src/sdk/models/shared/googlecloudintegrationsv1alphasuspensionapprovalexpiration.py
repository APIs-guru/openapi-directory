from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration:
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    lift_when_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liftWhenExpired' }})
    remind_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remindTime' }})
    
