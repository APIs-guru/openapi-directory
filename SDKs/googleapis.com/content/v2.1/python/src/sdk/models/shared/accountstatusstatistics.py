from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountStatusStatistics:
    active: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    disapproved: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapproved' }})
    expiring: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiring' }})
    pending: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    
