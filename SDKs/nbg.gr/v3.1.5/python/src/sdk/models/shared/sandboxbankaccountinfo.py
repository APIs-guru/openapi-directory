from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxBankAccountInfo:
    account_sub_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountSubType' }})
    account_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    available_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableBalance' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    iban: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    ledger_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledgerBalance' }})
    opening_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    overdraft_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overdraftLimit' }})
    
