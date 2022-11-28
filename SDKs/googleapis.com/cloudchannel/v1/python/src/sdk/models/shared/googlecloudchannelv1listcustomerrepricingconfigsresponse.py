from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse:
    r"""GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
    Response message for CloudChannelService.ListCustomerRepricingConfigs.
    """
    
    customer_repricing_configs: Optional[List[GoogleCloudChannelV1CustomerRepricingConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRepricingConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
