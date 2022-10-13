from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1cloudidentityinfo

class GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum(str, Enum):
    CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"
    INVITED = "INVITED"
    ACTIVE = "ACTIVE"
    REVOKED = "REVOKED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudChannelV1ChannelPartnerLink:
    channel_partner_cloud_identity_info: Optional[googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerCloudIdentityInfo' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    invite_link_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inviteLinkUri' }})
    link_state: Optional[GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicId' }})
    reseller_cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resellerCloudIdentityId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
