from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1customerrepricingconfig


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse:
    customer_repricing_configs: Optional[List[googlecloudchannelv1customerrepricingconfig.GoogleCloudChannelV1CustomerRepricingConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerRepricingConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
