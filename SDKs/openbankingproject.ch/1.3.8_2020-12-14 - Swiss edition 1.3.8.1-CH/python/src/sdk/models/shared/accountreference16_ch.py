from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountReference16Ch:
    cash_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashAccountType' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    other_account_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherAccountIdentification' }})
    
