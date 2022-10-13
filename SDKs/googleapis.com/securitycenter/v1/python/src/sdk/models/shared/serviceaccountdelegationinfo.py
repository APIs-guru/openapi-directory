from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceAccountDelegationInfo:
    principal_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalEmail' }})
    principal_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalSubject' }})
    
