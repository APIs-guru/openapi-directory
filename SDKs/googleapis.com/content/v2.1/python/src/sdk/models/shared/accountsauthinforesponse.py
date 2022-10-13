from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountidentifier


@dataclass_json
@dataclass
class AccountsAuthInfoResponse:
    account_identifiers: Optional[List[accountidentifier.AccountIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIdentifiers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
