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
class Account:
    r"""Account
    Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
    """
    
    adult_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adultContent') }})
    adwords_links: Optional[List[AccountAdwordsLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adwordsLinks') }})
    business_information: Optional[AccountBusinessInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessInformation') }})
    google_my_business_link: Optional[AccountGoogleMyBusinessLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleMyBusinessLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reviews_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewsUrl') }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    users: Optional[List[AccountUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    youtube_channel_links: Optional[List[AccountYouTubeChannelLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeChannelLinks') }})
    
