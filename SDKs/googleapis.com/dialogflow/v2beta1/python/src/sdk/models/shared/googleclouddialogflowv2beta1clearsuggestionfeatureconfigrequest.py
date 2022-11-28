from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"

class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    FAQ = "FAQ"
    SMART_REPLY = "SMART_REPLY"
    CONVERSATION_SUMMARIZATION = "CONVERSATION_SUMMARIZATION"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest:
    r"""GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest
    The request message for ConversationProfiles.ClearFeature.
    """
    
    participant_role: Optional[GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participantRole') }})
    suggestion_feature_type: Optional[GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionFeatureType') }})
    
