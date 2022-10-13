from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import image
from . import capacity
from . import count
from . import featuredescription
from . import grocery
from . import image
from . import nutrition
from . import productdetail
from . import price


@dataclass_json
@dataclass
class Attributes:
    additional_image_link: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImageLink' }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGroup' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    capacity: Optional[capacity.Capacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    count: Optional[count.Count] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disclosure_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disclosureDate' }})
    excluded_destination: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedDestination' }})
    feature_description: Optional[List[featuredescription.FeatureDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureDescription' }})
    flavor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flavor' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    grocery: Optional[grocery.Grocery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grocery' }})
    gtin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    image_link: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLink' }})
    included_destination: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedDestination' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    nutrition: Optional[nutrition.Nutrition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutrition' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    product_detail: Optional[List[productdetail.ProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productDetail' }})
    product_highlight: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productHighlight' }})
    product_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLine' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productName' }})
    product_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productPageUrl' }})
    product_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate' }})
    rich_product_content: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'richProductContent' }})
    scent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scent' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    size_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeSystem' }})
    size_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeType' }})
    suggested_retail_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedRetailPrice' }})
    target_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetClientId' }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    video_link: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoLink' }})
    
