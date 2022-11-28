from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrderLineItemProduct:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    fees: Optional[List[OrderLineItemProductFee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLink') }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpn') }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCountry') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    variant_attributes: Optional[List[OrderLineItemProductVariantAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantAttributes') }})
    
