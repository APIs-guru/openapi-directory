from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountGoogleMyBusinessLink:
    gmb_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmbEmail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
