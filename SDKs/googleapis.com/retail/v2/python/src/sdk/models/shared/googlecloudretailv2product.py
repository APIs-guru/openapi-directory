from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudRetailV2Product
    Product captures all metadata information of items to be recommended or searched.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    audience: Optional[GoogleCloudRetailV2Audience] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    availability: Optional[GoogleCloudRetailV2ProductAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQuantity') }})
    available_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableTime') }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    collection_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionMemberIds') }})
    color_info: Optional[GoogleCloudRetailV2ColorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorInfo') }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    fulfillment_info: Optional[List[GoogleCloudRetailV2FulfillmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentInfo') }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[GoogleCloudRetailV2Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    local_inventories: Optional[List[GoogleCloudRetailV2LocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localInventories') }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    price_info: Optional[GoogleCloudRetailV2PriceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceInfo') }})
    primary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryProductId') }})
    promotions: Optional[List[GoogleCloudRetailV2Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    rating: Optional[GoogleCloudRetailV2Rating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    retrievable_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievableFields') }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[GoogleCloudRetailV2ProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    variants: Optional[List[GoogleCloudRetailV2Product]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2ProductInput:
    r"""GoogleCloudRetailV2ProductInput
    Product captures all metadata information of items to be recommended or searched.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    audience: Optional[GoogleCloudRetailV2Audience] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    availability: Optional[GoogleCloudRetailV2ProductAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    available_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQuantity') }})
    available_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableTime') }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    collection_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionMemberIds') }})
    color_info: Optional[GoogleCloudRetailV2ColorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorInfo') }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    fulfillment_info: Optional[List[GoogleCloudRetailV2FulfillmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentInfo') }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[GoogleCloudRetailV2Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    price_info: Optional[GoogleCloudRetailV2PriceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceInfo') }})
    primary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryProductId') }})
    promotions: Optional[List[GoogleCloudRetailV2Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    rating: Optional[GoogleCloudRetailV2Rating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    retrievable_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievableFields') }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[GoogleCloudRetailV2ProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
