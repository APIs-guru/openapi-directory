from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1channelpartnerlink


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListChannelPartnerLinksResponse:
    channel_partner_links: Optional[List[googlecloudchannelv1channelpartnerlink.GoogleCloudChannelV1ChannelPartnerLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerLinks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
