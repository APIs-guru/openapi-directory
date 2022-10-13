from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig

class GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest:
    participant_role: Optional[GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participantRole' }})
    suggestion_feature_config: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionFeatureConfig' }})
    
