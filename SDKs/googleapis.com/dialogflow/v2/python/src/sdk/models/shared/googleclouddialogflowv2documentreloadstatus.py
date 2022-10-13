from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2DocumentReloadStatus:
    status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
