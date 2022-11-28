from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse:
    r"""GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
    Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
    """
    
    channel_partner_repricing_configs: Optional[List[GoogleCloudChannelV1ChannelPartnerRepricingConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerRepricingConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
