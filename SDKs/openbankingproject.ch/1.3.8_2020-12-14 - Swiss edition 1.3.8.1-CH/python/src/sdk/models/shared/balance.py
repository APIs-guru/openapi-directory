from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import balancetype_enum


@dataclass_json
@dataclass
class Balance:
    balance_amount: amount.Amount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceAmount' }})
    balance_type: balancetype_enum.BalanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceType' }})
    credit_limit_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditLimitIncluded' }})
    last_change_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChangeDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_committed_transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastCommittedTransaction' }})
    reference_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
