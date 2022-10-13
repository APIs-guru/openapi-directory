from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matterpermission


@dataclass_json
@dataclass
class AddMatterPermissionsRequest:
    cc_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccMe' }})
    matter_permission: Optional[matterpermission.MatterPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matterPermission' }})
    send_emails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendEmails' }})
    
