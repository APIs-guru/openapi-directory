from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import diskattachment
from . import newdiskinitializeparams


@dataclass_json
@dataclass
class NewDisk:
    attachment: Optional[diskattachment.DiskAttachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    auto_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDelete' }})
    boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boot' }})
    initialize_params: Optional[newdiskinitializeparams.NewDiskInitializeParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializeParams' }})
    
