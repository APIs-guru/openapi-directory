from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authdetailsrepresentation


@dataclass_json
@dataclass
class AdminEventRepresentation:
    auth_details: Optional[authdetailsrepresentation.AuthDetailsRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authDetails' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    operation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationType' }})
    realm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmId' }})
    representation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'representation' }})
    resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcePath' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
