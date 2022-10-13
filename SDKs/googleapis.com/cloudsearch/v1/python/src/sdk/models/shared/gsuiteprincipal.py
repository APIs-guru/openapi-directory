from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GSuitePrincipal:
    gsuite_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gsuiteDomain' }})
    gsuite_group_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gsuiteGroupEmail' }})
    gsuite_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gsuiteUserEmail' }})
    
