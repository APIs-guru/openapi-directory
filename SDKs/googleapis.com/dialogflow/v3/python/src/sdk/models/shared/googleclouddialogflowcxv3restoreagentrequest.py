from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum(str, Enum):
    RESTORE_OPTION_UNSPECIFIED = "RESTORE_OPTION_UNSPECIFIED"
    KEEP = "KEEP"
    FALLBACK = "FALLBACK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3RestoreAgentRequest:
    agent_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentContent' }})
    agent_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUri' }})
    restore_option: Optional[GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreOption' }})
    
