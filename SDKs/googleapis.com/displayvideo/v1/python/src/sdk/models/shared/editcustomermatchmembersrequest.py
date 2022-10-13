from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactinfolist
from . import mobiledeviceidlist


@dataclass_json
@dataclass
class EditCustomerMatchMembersRequest:
    added_contact_info_list: Optional[contactinfolist.ContactInfoList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedContactInfoList' }})
    added_mobile_device_id_list: Optional[mobiledeviceidlist.MobileDeviceIDList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedMobileDeviceIdList' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    
