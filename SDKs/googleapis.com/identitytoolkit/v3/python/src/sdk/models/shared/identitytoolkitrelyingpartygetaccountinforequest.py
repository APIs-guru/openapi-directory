from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyGetAccountInfoRequest:
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    email: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    local_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localId' }})
    phone_number: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    
