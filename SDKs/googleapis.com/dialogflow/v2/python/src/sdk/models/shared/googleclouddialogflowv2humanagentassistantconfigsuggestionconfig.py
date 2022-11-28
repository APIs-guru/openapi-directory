from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig:
    r"""GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig
    Detail human agent assistant config.
    """
    
    feature_configs: Optional[List[GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureConfigs') }})
    group_suggestion_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupSuggestionResponses') }})
    
