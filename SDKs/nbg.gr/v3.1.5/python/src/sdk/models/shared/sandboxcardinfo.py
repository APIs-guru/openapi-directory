from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxCardInfo:
    available_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableBalance' }})
    credit_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditLimit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    holder_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holderName' }})
    ledger_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledgerBalance' }})
    number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subType' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
