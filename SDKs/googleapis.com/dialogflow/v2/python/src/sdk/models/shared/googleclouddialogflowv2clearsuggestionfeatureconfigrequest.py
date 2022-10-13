from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"

class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    FAQ = "FAQ"
    SMART_REPLY = "SMART_REPLY"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest:
    participant_role: Optional[GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participantRole' }})
    suggestion_feature_type: Optional[GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionFeatureType' }})
    
