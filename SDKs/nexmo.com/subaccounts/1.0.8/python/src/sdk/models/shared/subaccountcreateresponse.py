from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubaccountCreateResponse:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    credit_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit_limit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_account_api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_account_api_key' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    use_primary_account_balance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_primary_account_balance' }})
    
