from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AutomatedAgentConfig:
    r"""GoogleCloudDialogflowV2AutomatedAgentConfig
    Defines the Automated Agent to connect to a conversation.
    """
    
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    
