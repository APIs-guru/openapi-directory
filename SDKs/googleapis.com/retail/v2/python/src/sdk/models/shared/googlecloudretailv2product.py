from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2customattribute
from . import googlecloudretailv2audience
from . import googlecloudretailv2colorinfo
from . import googlecloudretailv2fulfillmentinfo
from . import googlecloudretailv2image
from . import googlecloudretailv2localinventory
from . import googlecloudretailv2priceinfo
from . import googlecloudretailv2promotion
from . import googlecloudretailv2rating
from . import googlecloudretailv2product

class GoogleCloudRetailV2ProductAvailabilityEnum(str, Enum):
    AVAILABILITY_UNSPECIFIED = "AVAILABILITY_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"

class GoogleCloudRetailV2ProductTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PRIMARY = "PRIMARY"
    VARIANT = "VARIANT"
    COLLECTION = "COLLECTION"


@dataclass_json
@dataclass
class GoogleCloudRetailV2Product:
    attributes: Optional[dict[str, googlecloudretailv2customattribute.GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    audience: Optional[googlecloudretailv2audience.GoogleCloudRetailV2Audience] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    availability: Optional[GoogleCloudRetailV2ProductAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQuantity' }})
    available_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableTime' }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    collection_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionMemberIds' }})
    color_info: Optional[googlecloudretailv2colorinfo.GoogleCloudRetailV2ColorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorInfo' }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    fulfillment_info: Optional[List[googlecloudretailv2fulfillmentinfo.GoogleCloudRetailV2FulfillmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentInfo' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[googlecloudretailv2image.GoogleCloudRetailV2Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    local_inventories: Optional[List[googlecloudretailv2localinventory.GoogleCloudRetailV2LocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventories' }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    price_info: Optional[googlecloudretailv2priceinfo.GoogleCloudRetailV2PriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    primary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryProductId' }})
    promotions: Optional[List[googlecloudretailv2promotion.GoogleCloudRetailV2Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    rating: Optional[googlecloudretailv2rating.GoogleCloudRetailV2Rating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    retrievable_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retrievableFields' }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: Optional[GoogleCloudRetailV2ProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    variants: Optional[List[googlecloudretailv2product.GoogleCloudRetailV2Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    
