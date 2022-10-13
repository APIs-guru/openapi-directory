from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacustomattribute
from . import googlecloudretailv2alphaaudience
from . import googlecloudretailv2alphacolorinfo
from . import googlecloudretailv2alphafulfillmentinfo
from . import googlecloudretailv2alphaimage
from . import googlecloudretailv2alphalocalinventory
from . import googlecloudretailv2alphapriceinfo
from . import googlecloudretailv2alphapromotion
from . import googlecloudretailv2alpharating
from . import googlecloudretailv2alphaproduct

class GoogleCloudRetailV2alphaProductAvailabilityEnum(str, Enum):
    AVAILABILITY_UNSPECIFIED = "AVAILABILITY_UNSPECIFIED"
    IN_STOCK = "IN_STOCK"
    OUT_OF_STOCK = "OUT_OF_STOCK"
    PREORDER = "PREORDER"
    BACKORDER = "BACKORDER"

class GoogleCloudRetailV2alphaProductTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PRIMARY = "PRIMARY"
    VARIANT = "VARIANT"
    COLLECTION = "COLLECTION"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProduct:
    attributes: Optional[dict[str, googlecloudretailv2alphacustomattribute.GoogleCloudRetailV2alphaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    audience: Optional[googlecloudretailv2alphaaudience.GoogleCloudRetailV2alphaAudience] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    availability: Optional[GoogleCloudRetailV2alphaProductAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQuantity' }})
    available_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableTime' }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    collection_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionMemberIds' }})
    color_info: Optional[googlecloudretailv2alphacolorinfo.GoogleCloudRetailV2alphaColorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorInfo' }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    fulfillment_info: Optional[List[googlecloudretailv2alphafulfillmentinfo.GoogleCloudRetailV2alphaFulfillmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentInfo' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[googlecloudretailv2alphaimage.GoogleCloudRetailV2alphaImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    local_inventories: Optional[List[googlecloudretailv2alphalocalinventory.GoogleCloudRetailV2alphaLocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventories' }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    price_info: Optional[googlecloudretailv2alphapriceinfo.GoogleCloudRetailV2alphaPriceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceInfo' }})
    primary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryProductId' }})
    promotions: Optional[List[googlecloudretailv2alphapromotion.GoogleCloudRetailV2alphaPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    rating: Optional[googlecloudretailv2alpharating.GoogleCloudRetailV2alphaRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    retrievable_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retrievableFields' }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: Optional[GoogleCloudRetailV2alphaProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    variants: Optional[List[googlecloudretailv2alphaproduct.GoogleCloudRetailV2alphaProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    
