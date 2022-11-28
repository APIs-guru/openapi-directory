from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest:
    r"""GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest
    The request message for ConversationProfiles.SetSuggestionFeature.
    """
    
    participant_role: Optional[GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participantRole') }})
    suggestion_feature_config: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionFeatureConfig') }})
    
