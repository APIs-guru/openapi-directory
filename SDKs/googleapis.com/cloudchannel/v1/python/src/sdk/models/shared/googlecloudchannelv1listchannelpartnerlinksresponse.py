from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListChannelPartnerLinksResponse:
    r"""GoogleCloudChannelV1ListChannelPartnerLinksResponse
    Response message for CloudChannelService.ListChannelPartnerLinks.
    """
    
    channel_partner_links: Optional[List[GoogleCloudChannelV1ChannelPartnerLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerLinks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
