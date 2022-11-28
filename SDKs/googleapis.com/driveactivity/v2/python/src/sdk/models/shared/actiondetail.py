from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionDetail:
    r"""ActionDetail
    Data describing the type and additional information of an action.
    """
    
    applied_label_change: Optional[AppliedLabelChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelChange') }})
    comment: Optional[Comment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    create: Optional[Create] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    delete: Optional[Delete] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    dlp_change: Optional[DataLeakPreventionChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dlpChange') }})
    edit: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit') }})
    move: Optional[Move] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move') }})
    permission_change: Optional[PermissionChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionChange') }})
    reference: Optional[ApplicationReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    rename: Optional[Rename] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    restore: Optional[Restore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restore') }})
    settings_change: Optional[SettingsChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingsChange') }})
    
