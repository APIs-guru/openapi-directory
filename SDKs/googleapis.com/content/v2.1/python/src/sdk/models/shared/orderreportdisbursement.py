from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class OrderReportDisbursement:
    disbursement_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementAmount' }})
    disbursement_creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementCreationDate' }})
    disbursement_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementDate' }})
    disbursement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursementId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    
