from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountInput:
    r"""AccountInput
    Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
    """
    
    ads_links: Optional[List[AccountAdsLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsLinks') }})
    adult_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adultContent') }})
    automatic_improvements: Optional[AccountAutomaticImprovementsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticImprovements') }})
    automatic_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticLabelIds') }})
    business_information: Optional[AccountBusinessInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessInformation') }})
    css_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cssId') }})
    google_my_business_link: Optional[AccountGoogleMyBusinessLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleMyBusinessLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelIds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    users: Optional[List[AccountUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    youtube_channel_links: Optional[List[AccountYouTubeChannelLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeChannelLinks') }})
    

@dataclass_json
@dataclass
class Account:
    r"""Account
    Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
    """
    
    account_management: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountManagement') }})
    ads_links: Optional[List[AccountAdsLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsLinks') }})
    adult_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adultContent') }})
    automatic_improvements: Optional[AccountAutomaticImprovements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticImprovements') }})
    automatic_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticLabelIds') }})
    business_information: Optional[AccountBusinessInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessInformation') }})
    css_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cssId') }})
    google_my_business_link: Optional[AccountGoogleMyBusinessLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleMyBusinessLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelIds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    users: Optional[List[AccountUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    youtube_channel_links: Optional[List[AccountYouTubeChannelLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeChannelLinks') }})
    
