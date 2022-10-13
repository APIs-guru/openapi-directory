from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1customer


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListCustomersResponse:
    customers: Optional[List[googlecloudchannelv1customer.GoogleCloudChannelV1Customer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
