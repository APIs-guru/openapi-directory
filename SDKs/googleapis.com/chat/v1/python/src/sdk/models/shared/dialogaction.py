from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actionstatus
from . import dialog


@dataclass_json
@dataclass
class DialogAction:
    action_status: Optional[actionstatus.ActionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionStatus' }})
    dialog: Optional[dialog.Dialog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialog' }})
    
