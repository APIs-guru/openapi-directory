from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EditCustomerMatchMembersRequest:
    r"""EditCustomerMatchMembersRequest
    Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
    """
    
    added_contact_info_list: Optional[ContactInfoList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedContactInfoList') }})
    added_mobile_device_id_list: Optional[MobileDeviceIDList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedMobileDeviceIdList') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    
