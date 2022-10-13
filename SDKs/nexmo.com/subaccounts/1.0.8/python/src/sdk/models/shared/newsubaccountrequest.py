from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewSubaccountRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    use_primary_account_balance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_primary_account_balance' }})
    
