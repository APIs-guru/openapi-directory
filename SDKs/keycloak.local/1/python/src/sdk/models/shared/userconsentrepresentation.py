from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserConsentRepresentation:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    created_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate' }})
    granted_client_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantedClientScopes' }})
    last_updated_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate' }})
    
