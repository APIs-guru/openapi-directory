from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacustomattribute
from . import googlecloudretailv2betaaudience
from . import googlecloudretailv2betacolorinfo
from . import googlecloudretailv2betafulfillmentinfo
from . import googlecloudretailv2betaimage
from . import googlecloudretailv2betalocalinventory
from . import googlecloudretailv2betapriceinfo
from . import googlecloudretailv2betapromotion
from . import googlecloudretailv2betarating
from . import googlecloudretailv2betaproduct

class GoogleCloudRetailV2betaProductAvailabilityEnum(str, Enum):
    AVAILABILITY_UNSPECIFIED = "AVAILABILITY_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"

class GoogleCloudRetailV2betaProductTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PRIMARY = "PRIMARY"
    VARIANT = "VARIANT"
    COLLECTION = "COLLECTION"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProduct:
    attributes: Optional[dict[str, googlecloudretailv2betacustomattribute.GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    audience: Optional[googlecloudretailv2betaaudience.GoogleCloudRetailV2betaAudience] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    availability: Optional[GoogleCloudRetailV2betaProductAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQuantity' }})
    available_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableTime' }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    collection_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionMemberIds' }})
    color_info: Optional[googlecloudretailv2betacolorinfo.GoogleCloudRetailV2betaColorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorInfo' }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    fulfillment_info: Optional[List[googlecloudretailv2betafulfillmentinfo.GoogleCloudRetailV2betaFulfillmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentInfo' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[googlecloudretailv2betaimage.GoogleCloudRetailV2betaImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    local_inventories: Optional[List[googlecloudretailv2betalocalinventory.GoogleCloudRetailV2betaLocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventories' }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    price_info: Optional[googlecloudretailv2betapriceinfo.GoogleCloudRetailV2betaPriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    primary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryProductId' }})
    promotions: Optional[List[googlecloudretailv2betapromotion.GoogleCloudRetailV2betaPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    rating: Optional[googlecloudretailv2betarating.GoogleCloudRetailV2betaRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    retrievable_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retrievableFields' }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: Optional[GoogleCloudRetailV2betaProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    variants: Optional[List[googlecloudretailv2betaproduct.GoogleCloudRetailV2betaProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    
