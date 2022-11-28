from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalSetPolicyRequest:
    r"""SasPortalSetPolicyRequest
    Request message for `SetPolicy` method.
    """
    
    disable_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNotification') }})
    policy: Optional[SasPortalPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
