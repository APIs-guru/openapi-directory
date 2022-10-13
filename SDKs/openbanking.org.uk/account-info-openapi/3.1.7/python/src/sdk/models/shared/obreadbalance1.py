from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obcreditdebitcode_2_enum
from . import obbalancetype1code_enum
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadBalance1DataBalanceAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObReadBalance1DataBalanceCreditLineAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    
class ObReadBalance1DataBalanceCreditLineTypeEnum(str, Enum):
    AVAILABLE = "Available"
    CREDIT = "Credit"
    EMERGENCY = "Emergency"
    PRE_AGREED = "Pre-Agreed"
    TEMPORARY = "Temporary"


@dataclass_json
@dataclass
class ObReadBalance1DataBalanceCreditLine:
    amount: Optional[ObReadBalance1DataBalanceCreditLineAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    included: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Included' }})
    type: Optional[ObReadBalance1DataBalanceCreditLineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObReadBalance1DataBalance:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    amount: ObReadBalance1DataBalanceAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_2_enum.ObCreditDebitCode2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    credit_line: Optional[List[ObReadBalance1DataBalanceCreditLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditLine' }})
    date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: obbalancetype1code_enum.ObBalanceType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObReadBalance1Data:
    balance: List[ObReadBalance1DataBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Balance' }})
    

@dataclass_json
@dataclass
class ObReadBalance1:
    data: ObReadBalance1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
