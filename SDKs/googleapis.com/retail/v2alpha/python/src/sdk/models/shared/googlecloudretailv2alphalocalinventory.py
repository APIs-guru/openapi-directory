from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacustomattribute
from . import googlecloudretailv2alphapriceinfo


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaLocalInventory:
    attributes: Optional[dict[str, googlecloudretailv2alphacustomattribute.GoogleCloudRetailV2alphaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    fulfillment_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentTypes' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    price_info: Optional[googlecloudretailv2alphapriceinfo.GoogleCloudRetailV2alphaPriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    
