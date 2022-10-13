from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import productamount


@dataclass_json
@dataclass
class OrderReportTransaction:
    disbursement_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementAmount' }})
    disbursement_creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementCreationDate' }})
    disbursement_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementDate' }})
    disbursement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    product_amount: Optional[productamount.ProductAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productAmount' }})
    transaction_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionDate' }})
    
