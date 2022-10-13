from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceaccount


@dataclass_json
@dataclass
class UndeleteServiceAccountResponse:
    restored_account: Optional[serviceaccount.ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoredAccount' }})
    
