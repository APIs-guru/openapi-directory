from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagenthandoffconfiglivepersonconfig
from . import googleclouddialogflowv2humanagenthandoffconfigsalesforceliveagentconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentHandoffConfig:
    live_person_config: Optional[googleclouddialogflowv2humanagenthandoffconfiglivepersonconfig.GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livePersonConfig' }})
    salesforce_live_agent_config: Optional[googleclouddialogflowv2humanagenthandoffconfigsalesforceliveagentconfig.GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesforceLiveAgentConfig' }})
    
