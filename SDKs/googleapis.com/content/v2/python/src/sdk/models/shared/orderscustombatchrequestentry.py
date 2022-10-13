from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderscustombatchrequestentrycancel
from . import orderscustombatchrequestentrycancellineitem
from . import orderscustombatchrequestentryinstorerefundlineitem
from . import orderscustombatchrequestentryrefund
from . import orderscustombatchrequestentryrejectreturnlineitem
from . import orderscustombatchrequestentryreturnlineitem
from . import orderscustombatchrequestentryreturnrefundlineitem
from . import orderscustombatchrequestentrysetlineitemmetadata
from . import orderscustombatchrequestentryshiplineitems
from . import orderscustombatchrequestentryupdatelineitemshippingdetails
from . import orderscustombatchrequestentryupdateshipment


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    cancel: Optional[orderscustombatchrequestentrycancel.OrdersCustomBatchRequestEntryCancel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel' }})
    cancel_line_item: Optional[orderscustombatchrequestentrycancellineitem.OrdersCustomBatchRequestEntryCancelLineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelLineItem' }})
    in_store_refund_line_item: Optional[orderscustombatchrequestentryinstorerefundlineitem.OrdersCustomBatchRequestEntryInStoreRefundLineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inStoreRefundLineItem' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    refund: Optional[orderscustombatchrequestentryrefund.OrdersCustomBatchRequestEntryRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund' }})
    reject_return_line_item: Optional[orderscustombatchrequestentryrejectreturnlineitem.OrdersCustomBatchRequestEntryRejectReturnLineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectReturnLineItem' }})
    return_line_item: Optional[orderscustombatchrequestentryreturnlineitem.OrdersCustomBatchRequestEntryReturnLineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnLineItem' }})
    return_refund_line_item: Optional[orderscustombatchrequestentryreturnrefundlineitem.OrdersCustomBatchRequestEntryReturnRefundLineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnRefundLineItem' }})
    set_line_item_metadata: Optional[orderscustombatchrequestentrysetlineitemmetadata.OrdersCustomBatchRequestEntrySetLineItemMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setLineItemMetadata' }})
    ship_line_items: Optional[orderscustombatchrequestentryshiplineitems.OrdersCustomBatchRequestEntryShipLineItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipLineItems' }})
    update_line_item_shipping_details: Optional[orderscustombatchrequestentryupdatelineitemshippingdetails.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateLineItemShippingDetails' }})
    update_shipment: Optional[orderscustombatchrequestentryupdateshipment.OrdersCustomBatchRequestEntryUpdateShipment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateShipment' }})
    
