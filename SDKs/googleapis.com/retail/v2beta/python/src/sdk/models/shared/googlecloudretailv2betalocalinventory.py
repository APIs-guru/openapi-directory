from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacustomattribute
from . import googlecloudretailv2betapriceinfo


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaLocalInventory:
    attributes: Optional[dict[str, googlecloudretailv2betacustomattribute.GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    fulfillment_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentTypes' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    price_info: Optional[googlecloudretailv2betapriceinfo.GoogleCloudRetailV2betaPriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    
