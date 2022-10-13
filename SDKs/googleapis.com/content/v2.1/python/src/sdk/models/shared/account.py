from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountadslink
from . import accountautomaticimprovements
from . import accountbusinessinformation
from . import accountgooglemybusinesslink
from . import accountuser
from . import accountyoutubechannellink


@dataclass_json
@dataclass
class Account:
    account_management: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountManagement' }})
    ads_links: Optional[List[accountadslink.AccountAdsLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsLinks' }})
    adult_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adultContent' }})
    automatic_improvements: Optional[accountautomaticimprovements.AccountAutomaticImprovements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automaticImprovements' }})
    automatic_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automaticLabelIds' }})
    business_information: Optional[accountbusinessinformation.AccountBusinessInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessInformation' }})
    css_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cssId' }})
    google_my_business_link: Optional[accountgooglemybusinesslink.AccountGoogleMyBusinessLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleMyBusinessLink' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerId' }})
    users: Optional[List[accountuser.AccountUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    youtube_channel_links: Optional[List[accountyoutubechannellink.AccountYouTubeChannelLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeChannelLinks' }})
    
