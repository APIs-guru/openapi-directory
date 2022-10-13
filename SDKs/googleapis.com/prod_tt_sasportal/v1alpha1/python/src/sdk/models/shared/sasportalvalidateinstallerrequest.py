from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SasPortalValidateInstallerRequest:
    encoded_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedSecret' }})
    installer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installerId' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
