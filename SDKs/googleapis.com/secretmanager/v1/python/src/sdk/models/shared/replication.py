from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import automatic
from . import usermanaged


@dataclass_json
@dataclass
class Replication:
    automatic: Optional[automatic.Automatic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic' }})
    user_managed: Optional[usermanaged.UserManaged] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManaged' }})
    
