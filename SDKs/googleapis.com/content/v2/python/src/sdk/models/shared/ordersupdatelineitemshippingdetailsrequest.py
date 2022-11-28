from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrdersUpdateLineItemShippingDetailsRequest:
    deliver_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliverByDate') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    ship_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipByDate') }})
    
