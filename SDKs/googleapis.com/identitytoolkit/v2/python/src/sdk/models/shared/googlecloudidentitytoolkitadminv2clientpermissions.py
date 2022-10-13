from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ClientPermissions:
    disabled_user_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledUserDeletion' }})
    disabled_user_signup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledUserSignup' }})
    
