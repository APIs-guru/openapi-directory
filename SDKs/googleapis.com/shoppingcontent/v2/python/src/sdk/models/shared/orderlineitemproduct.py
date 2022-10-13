from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitemproductfee
from . import price
from . import orderlineitemproductvariantattribute


@dataclass_json
@dataclass
class OrderLineItemProduct:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    fees: Optional[List[orderlineitemproductfee.OrderLineItemProductFee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fees' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLink' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shown_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shownImage' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    variant_attributes: Optional[List[orderlineitemproductvariantattribute.OrderLineItemProductVariantAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantAttributes' }})
    
