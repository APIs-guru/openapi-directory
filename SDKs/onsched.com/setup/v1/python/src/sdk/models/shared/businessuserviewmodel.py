from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessUserViewModel:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityAccount' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
