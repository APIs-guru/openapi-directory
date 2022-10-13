from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _linkssigningbasket
from . import transactionstatus_sbs_enum


@dataclass_json
@dataclass
class SigningBasketResponse200:
    links: Optional[_linkssigningbasket.LinksSigningBasket] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    consents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consents' }})
    payments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    transaction_status: transactionstatus_sbs_enum.TransactionStatusSbsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
