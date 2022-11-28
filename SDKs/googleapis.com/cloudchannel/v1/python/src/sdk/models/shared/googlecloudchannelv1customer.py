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
class GoogleCloudChannelV1Customer:
    r"""GoogleCloudChannelV1Customer
    Entity representing a customer of a reseller or distributor.
    """
    
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    channel_partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerId') }})
    cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityId') }})
    cloud_identity_info: Optional[GoogleCloudChannelV1CloudIdentityInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgDisplayName') }})
    org_postal_address: Optional[GoogleTypePostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPostalAddress') }})
    primary_contact_info: Optional[GoogleCloudChannelV1ContactInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactInfo') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1CustomerInput:
    r"""GoogleCloudChannelV1CustomerInput
    Entity representing a customer of a reseller or distributor.
    """
    
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    channel_partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerId') }})
    cloud_identity_info: Optional[GoogleCloudChannelV1CloudIdentityInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    org_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgDisplayName') }})
    org_postal_address: Optional[GoogleTypePostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPostalAddress') }})
    primary_contact_info: Optional[GoogleCloudChannelV1ContactInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactInfo') }})
    
