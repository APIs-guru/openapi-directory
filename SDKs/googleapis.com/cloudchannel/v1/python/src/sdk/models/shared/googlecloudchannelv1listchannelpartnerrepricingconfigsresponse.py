from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1channelpartnerrepricingconfig


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse:
    channel_partner_repricing_configs: Optional[List[googlecloudchannelv1channelpartnerrepricingconfig.GoogleCloudChannelV1ChannelPartnerRepricingConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerRepricingConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
