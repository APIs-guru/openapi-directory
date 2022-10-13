from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apikeys
from . import accountquota


@dataclass_json
@dataclass
class Account:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    keys: Optional[apikeys.APIKeys] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    quotas: Optional[accountquota.AccountQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quotas' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
