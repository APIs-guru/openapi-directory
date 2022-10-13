from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import transactionstatus_sbs_enum


@dataclass_json
@dataclass
class SigningBasketStatusResponse200:
    transaction_status: transactionstatus_sbs_enum.TransactionStatusSbsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
