from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import appliedlabelchange
from . import comment
from . import create
from . import delete
from . import dataleakpreventionchange
from . import move
from . import permissionchange
from . import applicationreference
from . import rename
from . import restore
from . import settingschange


@dataclass_json
@dataclass
class ActionDetail:
    applied_label_change: Optional[appliedlabelchange.AppliedLabelChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedLabelChange' }})
    comment: Optional[comment.Comment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    create: Optional[create.Create] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create' }})
    delete: Optional[delete.Delete] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    dlp_change: Optional[dataleakpreventionchange.DataLeakPreventionChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dlpChange' }})
    edit: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit' }})
    move: Optional[move.Move] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'move' }})
    permission_change: Optional[permissionchange.PermissionChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionChange' }})
    reference: Optional[applicationreference.ApplicationReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    rename: Optional[rename.Rename] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rename' }})
    restore: Optional[restore.Restore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restore' }})
    settings_change: Optional[settingschange.SettingsChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingsChange' }})
    
