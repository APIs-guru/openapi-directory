from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CredentialRepresentation:
    created_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate' }})
    credential_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialData' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    secret_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretData' }})
    temporary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabel' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
