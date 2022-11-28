from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput:
    r"""GoogleCloudChannelV1ProvisionCloudIdentityRequestInput
    Request message for CloudChannelService.ProvisionCloudIdentity
    """
    
    cloud_identity_info: Optional[GoogleCloudChannelV1CloudIdentityInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    user: Optional[GoogleCloudChannelV1AdminUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
