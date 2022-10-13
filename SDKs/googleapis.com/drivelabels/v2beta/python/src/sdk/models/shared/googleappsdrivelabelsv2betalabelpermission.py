from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum(str, Enum):
    LABEL_ROLE_UNSPECIFIED = "LABEL_ROLE_UNSPECIFIED"
    READER = "READER"
    APPLIER = "APPLIER"
    ORGANIZER = "ORGANIZER"
    EDITOR = "EDITOR"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelPermission:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    person: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    role: Optional[GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
