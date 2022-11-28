from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskMetadataAdmin:
    r"""EnterpriseCrmEventbusProtoTaskMetadataAdmin
    Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.
    """
    
    google_group_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleGroupEmail') }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmail') }})
    
