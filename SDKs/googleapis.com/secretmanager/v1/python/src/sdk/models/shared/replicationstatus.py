from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import automaticstatus
from . import usermanagedstatus


@dataclass_json
@dataclass
class ReplicationStatus:
    automatic: Optional[automaticstatus.AutomaticStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic' }})
    user_managed: Optional[usermanagedstatus.UserManagedStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManaged' }})
    
