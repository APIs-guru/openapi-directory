from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attributes:
    r"""Attributes
    Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
    """
    
    additional_image_link: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalImageLink') }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageGroup') }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    capacity: Optional[Capacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    count: Optional[Count] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disclosure_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disclosureDate') }})
    excluded_destination: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedDestination') }})
    feature_description: Optional[List[FeatureDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureDescription') }})
    flavor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flavor') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    grocery: Optional[Grocery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grocery') }})
    gtin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    image_link: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLink') }})
    included_destination: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedDestination') }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('material') }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpn') }})
    nutrition: Optional[Nutrition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutrition') }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    product_detail: Optional[List[ProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDetail') }})
    product_highlight: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productHighlight') }})
    product_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productLine') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productName') }})
    product_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productPageUrl') }})
    product_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    rich_product_content: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richProductContent') }})
    scent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scent') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    size_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeSystem') }})
    size_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeType') }})
    suggested_retail_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedRetailPrice') }})
    target_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetClientId') }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_link: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoLink') }})
    
