from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2customattribute
from . import googlecloudretailv2priceinfo


@dataclass_json
@dataclass
class GoogleCloudRetailV2LocalInventory:
    attributes: Optional[dict[str, googlecloudretailv2customattribute.GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    fulfillment_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentTypes' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    price_info: Optional[googlecloudretailv2priceinfo.GoogleCloudRetailV2PriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    
