from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry:
    r"""GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry
    Represents an environment history entry.
    """
    
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
