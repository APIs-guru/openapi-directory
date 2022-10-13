from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1humanagenthandoffconfiglivepersonconfig
from . import googleclouddialogflowv2beta1humanagenthandoffconfigsalesforceliveagentconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig:
    live_person_config: Optional[googleclouddialogflowv2beta1humanagenthandoffconfiglivepersonconfig.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livePersonConfig' }})
    salesforce_live_agent_config: Optional[googleclouddialogflowv2beta1humanagenthandoffconfigsalesforceliveagentconfig.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesforceLiveAgentConfig' }})
    
