from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    cancel: Optional[OrdersCustomBatchRequestEntryCancel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel') }})
    cancel_line_item: Optional[OrdersCustomBatchRequestEntryCancelLineItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelLineItem') }})
    in_store_refund_line_item: Optional[OrdersCustomBatchRequestEntryInStoreRefundLineItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inStoreRefundLineItem') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    refund: Optional[OrdersCustomBatchRequestEntryRefund] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund') }})
    reject_return_line_item: Optional[OrdersCustomBatchRequestEntryRejectReturnLineItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectReturnLineItem') }})
    return_line_item: Optional[OrdersCustomBatchRequestEntryReturnLineItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnLineItem') }})
    return_refund_line_item: Optional[OrdersCustomBatchRequestEntryReturnRefundLineItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnRefundLineItem') }})
    set_line_item_metadata: Optional[OrdersCustomBatchRequestEntrySetLineItemMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setLineItemMetadata') }})
    ship_line_items: Optional[OrdersCustomBatchRequestEntryShipLineItems] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipLineItems') }})
    update_line_item_shipping_details: Optional[OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLineItemShippingDetails') }})
    update_shipment: Optional[OrdersCustomBatchRequestEntryUpdateShipment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateShipment') }})
    
