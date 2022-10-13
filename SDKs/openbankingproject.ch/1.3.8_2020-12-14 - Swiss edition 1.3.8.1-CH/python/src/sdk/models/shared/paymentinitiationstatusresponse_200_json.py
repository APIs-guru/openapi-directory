from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transactionstatus_enum


@dataclass_json
@dataclass
class PaymentInitiationStatusResponse200JSON:
    funds_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundsAvailable' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    transaction_status: transactionstatus_enum.TransactionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
