from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordershipmentlineitemshipment
from . import orderscustombatchrequestentryshiplineitemsshipmentinfo


@dataclass_json
@dataclass
class OrdersShipLineItemsRequest:
    line_items: Optional[List[ordershipmentlineitemshipment.OrderShipmentLineItemShipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentGroupId' }})
    shipment_infos: Optional[List[orderscustombatchrequestentryshiplineitemsshipmentinfo.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentInfos' }})
    
