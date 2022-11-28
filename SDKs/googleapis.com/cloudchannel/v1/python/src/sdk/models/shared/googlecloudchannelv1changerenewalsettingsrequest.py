from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ChangeRenewalSettingsRequest:
    r"""GoogleCloudChannelV1ChangeRenewalSettingsRequest
    Request message for CloudChannelService.ChangeRenewalSettings.
    """
    
    renewal_settings: Optional[GoogleCloudChannelV1RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
