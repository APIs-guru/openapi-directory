from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class GoogleLocation:
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request_admin_rights_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAdminRightsUri' }})
    
