from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrderTrackingSignalLineItemDetails:
    r"""OrderTrackingSignalLineItemDetails
    The line items of the order.
    """
    
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpn') }})
    product_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productDescription') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upc') }})
    
