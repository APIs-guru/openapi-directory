from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountadwordslink
from . import accountbusinessinformation
from . import accountgooglemybusinesslink
from . import accountuser
from . import accountyoutubechannellink


@dataclass_json
@dataclass
class Account:
    adult_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adultContent' }})
    adwords_links: Optional[List[accountadwordslink.AccountAdwordsLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adwordsLinks' }})
    business_information: Optional[accountbusinessinformation.AccountBusinessInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessInformation' }})
    google_my_business_link: Optional[accountgooglemybusinesslink.AccountGoogleMyBusinessLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleMyBusinessLink' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reviews_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewsUrl' }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerId' }})
    users: Optional[List[accountuser.AccountUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    youtube_channel_links: Optional[List[accountyoutubechannellink.AccountYouTubeChannelLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeChannelLinks' }})
    
