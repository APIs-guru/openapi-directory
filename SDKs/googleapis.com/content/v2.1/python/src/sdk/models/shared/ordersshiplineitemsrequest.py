from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersShipLineItemsRequest:
    line_items: Optional[List[OrderShipmentLineItemShipment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentGroupId') }})
    shipment_infos: Optional[List[OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentInfos') }})
    
