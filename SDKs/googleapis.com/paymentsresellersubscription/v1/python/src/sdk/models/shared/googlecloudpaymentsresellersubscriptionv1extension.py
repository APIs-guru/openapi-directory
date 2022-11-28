from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Extension:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Extension
    Describes the details of an extension request.
    """
    
    duration: Optional[GoogleCloudPaymentsResellerSubscriptionV1Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    partner_user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerUserToken') }})
    
