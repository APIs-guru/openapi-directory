from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput:
    r"""GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput
    Expiration configs for the approval request.
    """
    
    lift_when_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liftWhenExpired') }})
    remind_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remindTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration:
    r"""GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration
    Expiration configs for the approval request.
    """
    
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    lift_when_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liftWhenExpired') }})
    remind_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remindTime') }})
    
