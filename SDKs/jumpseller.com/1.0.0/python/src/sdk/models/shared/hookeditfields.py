from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HookEditFieldsEventEnum(str, Enum):
    ORDER_UPDATED = "order_updated"
    ORDER_PENDING_PAYMENT = "order_pending_payment"
    ORDER_PAID = "order_paid"
    ORDER_SHIPPED = "order_shipped"
    ORDER_CANCELED = "order_canceled"
    ORDER_ABANDONED = "order_abandoned"
    PRODUCT_CREATED = "product_created"
    PRODUCT_UPDATED = "product_updated"
    PRODUCT_DELETED = "product_deleted"
    CUSTOMER_CREATED = "customer_created"
    CUSTOMER_UPDATED = "customer_updated"
    CUSTOMER_DELETED = "customer_deleted"


@dataclass_json
@dataclass
class HookEditFields:
    event: HookEditFieldsEventEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
