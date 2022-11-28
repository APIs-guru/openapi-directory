from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FirstAndThirdPartyAudienceAudienceSourceEnum(str, Enum):
    AUDIENCE_SOURCE_UNSPECIFIED = "AUDIENCE_SOURCE_UNSPECIFIED"
    DISPLAY_VIDEO_360 = "DISPLAY_VIDEO_360"
    CAMPAIGN_MANAGER = "CAMPAIGN_MANAGER"
    AD_MANAGER = "AD_MANAGER"
    SEARCH_ADS_360 = "SEARCH_ADS_360"
    YOUTUBE = "YOUTUBE"
    ADS_DATA_HUB = "ADS_DATA_HUB"

class FirstAndThirdPartyAudienceAudienceTypeEnum(str, Enum):
    AUDIENCE_TYPE_UNSPECIFIED = "AUDIENCE_TYPE_UNSPECIFIED"
    CUSTOMER_MATCH_CONTACT_INFO = "CUSTOMER_MATCH_CONTACT_INFO"
    CUSTOMER_MATCH_DEVICE_ID = "CUSTOMER_MATCH_DEVICE_ID"
    CUSTOMER_MATCH_USER_ID = "CUSTOMER_MATCH_USER_ID"
    ACTIVITY_BASED = "ACTIVITY_BASED"
    FREQUENCY_CAP = "FREQUENCY_CAP"
    TAG_BASED = "TAG_BASED"
    YOUTUBE_USERS = "YOUTUBE_USERS"
    LICENSED = "LICENSED"

class FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum(str, Enum):
    FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED"
    FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY"
    FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"


@dataclass_json
@dataclass
class FirstAndThirdPartyAudienceInput:
    r"""FirstAndThirdPartyAudienceInput
    Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    audience_type: Optional[FirstAndThirdPartyAudienceAudienceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    contact_info_list: Optional[ContactInfoList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfoList') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    first_and_third_party_audience_type: Optional[FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudienceType') }})
    membership_duration_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    mobile_device_id_list: Optional[MobileDeviceIDList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceIdList') }})
    

@dataclass_json
@dataclass
class FirstAndThirdPartyAudience:
    r"""FirstAndThirdPartyAudience
    Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
    """
    
    active_display_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDisplayAudienceSize') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    audience_source: Optional[FirstAndThirdPartyAudienceAudienceSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSource') }})
    audience_type: Optional[FirstAndThirdPartyAudienceAudienceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceType') }})
    contact_info_list: Optional[ContactInfoList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfoList') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayAudienceSize') }})
    display_desktop_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayDesktopAudienceSize') }})
    display_mobile_app_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMobileAppAudienceSize') }})
    display_mobile_web_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMobileWebAudienceSize') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    first_and_third_party_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudienceId') }})
    first_and_third_party_audience_type: Optional[FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudienceType') }})
    gmail_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmailAudienceSize') }})
    membership_duration_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    mobile_device_id_list: Optional[MobileDeviceIDList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceIdList') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    youtube_audience_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeAudienceSize') }})
    
