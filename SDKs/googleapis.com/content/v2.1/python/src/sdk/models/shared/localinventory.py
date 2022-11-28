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
class LocalInventory:
    r"""LocalInventory
    Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
    """
    
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    custom_attributes: Optional[List[CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributes') }})
    instore_product_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instoreProductLocation') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pickup_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupMethod') }})
    pickup_sla: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupSla') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sale_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salePrice') }})
    sale_price_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salePriceEffectiveDate') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    
