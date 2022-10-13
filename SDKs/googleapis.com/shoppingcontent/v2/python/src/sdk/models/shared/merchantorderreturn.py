from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import merchantorderreturnitem
from . import returnshipment


@dataclass_json
@dataclass
class MerchantOrderReturn:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    order_return_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderReturnId' }})
    return_items: Optional[List[merchantorderreturnitem.MerchantOrderReturnItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnItems' }})
    return_shipments: Optional[List[returnshipment.ReturnShipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShipments' }})
    
