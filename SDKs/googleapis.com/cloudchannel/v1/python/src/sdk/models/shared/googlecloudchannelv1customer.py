from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1cloudidentityinfo
from . import googletypepostaladdress
from . import googlecloudchannelv1contactinfo


@dataclass_json
@dataclass
class GoogleCloudChannelV1Customer:
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateEmail' }})
    channel_partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerId' }})
    cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityId' }})
    cloud_identity_info: Optional[googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityInfo' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgDisplayName' }})
    org_postal_address: Optional[googletypepostaladdress.GoogleTypePostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgPostalAddress' }})
    primary_contact_info: Optional[googlecloudchannelv1contactinfo.GoogleCloudChannelV1ContactInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactInfo' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
