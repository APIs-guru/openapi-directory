from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SettlementTransactionIdentifiers:
    adjustment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustmentId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    order_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderItemId' }})
    settlement_entry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settlementEntryId' }})
    shipment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentIds' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
