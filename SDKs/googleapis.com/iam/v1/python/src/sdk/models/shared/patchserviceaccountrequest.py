from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceaccount


@dataclass_json
@dataclass
class PatchServiceAccountRequest:
    service_account: Optional[serviceaccount.ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
