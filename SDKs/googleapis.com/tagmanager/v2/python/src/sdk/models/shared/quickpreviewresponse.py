from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerversion
from . import syncstatus


@dataclass_json
@dataclass
class QuickPreviewResponse:
    compiler_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compilerError' }})
    container_version: Optional[containerversion.ContainerVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersion' }})
    sync_status: Optional[syncstatus.SyncStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncStatus' }})
    
