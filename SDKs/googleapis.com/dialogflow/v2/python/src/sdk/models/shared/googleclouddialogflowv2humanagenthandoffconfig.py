from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentHandoffConfig:
    r"""GoogleCloudDialogflowV2HumanAgentHandoffConfig
    Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
    """
    
    live_person_config: Optional[GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livePersonConfig') }})
    salesforce_live_agent_config: Optional[GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesforceLiveAgentConfig') }})
    
