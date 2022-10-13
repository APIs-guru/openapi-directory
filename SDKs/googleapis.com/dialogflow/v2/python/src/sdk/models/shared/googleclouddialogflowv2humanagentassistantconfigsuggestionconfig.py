from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig:
    feature_configs: Optional[List[googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureConfigs' }})
    group_suggestion_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupSuggestionResponses' }})
    
