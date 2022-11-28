from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum(str, Enum):
    CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"
    INVITED = "INVITED"
    ACTIVE = "ACTIVE"
    REVOKED = "REVOKED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudChannelV1ChannelPartnerLinkInput:
    r"""GoogleCloudChannelV1ChannelPartnerLinkInput
    Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
    """
    
    channel_partner_cloud_identity_info: Optional[GoogleCloudChannelV1CloudIdentityInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerCloudIdentityInfo') }})
    link_state: Optional[GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkState') }})
    reseller_cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resellerCloudIdentityId') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1ChannelPartnerLink:
    r"""GoogleCloudChannelV1ChannelPartnerLink
    Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
    """
    
    channel_partner_cloud_identity_info: Optional[GoogleCloudChannelV1CloudIdentityInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerCloudIdentityInfo') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    invite_link_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inviteLinkUri') }})
    link_state: Optional[GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicId') }})
    reseller_cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resellerCloudIdentityId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
