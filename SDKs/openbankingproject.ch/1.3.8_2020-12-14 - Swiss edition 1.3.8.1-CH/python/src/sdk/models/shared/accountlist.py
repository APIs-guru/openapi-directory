from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import accountdetails


@dataclass_json
@dataclass
class AccountList:
    accounts: List[accountdetails.AccountDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    
