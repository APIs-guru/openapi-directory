from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig:
    feature_configs: Optional[List[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureConfigs' }})
    group_suggestion_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupSuggestionResponses' }})
    
