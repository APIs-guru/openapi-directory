from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2messageannotation
from . import googleclouddialogflowv2sentimentanalysisresult

class GoogleCloudDialogflowV2MessageParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Message:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    message_annotation: Optional[googleclouddialogflowv2messageannotation.GoogleCloudDialogflowV2MessageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageAnnotation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    participant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant' }})
    participant_role: Optional[GoogleCloudDialogflowV2MessageParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participantRole' }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendTime' }})
    sentiment_analysis: Optional[googleclouddialogflowv2sentimentanalysisresult.GoogleCloudDialogflowV2SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysis' }})
    
