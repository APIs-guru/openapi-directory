from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaMerchantCenterFeedFilter:
    primary_feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryFeedId' }})
    primary_feed_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryFeedName' }})
    
