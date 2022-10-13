from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1messageannotation
from . import googleclouddialogflowv2beta1sentimentanalysisresult

class GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Message:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    message_annotation: Optional[googleclouddialogflowv2beta1messageannotation.GoogleCloudDialogflowV2beta1MessageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageAnnotation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    participant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant' }})
    participant_role: Optional[GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participantRole' }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendTime' }})
    sentiment_analysis: Optional[googleclouddialogflowv2beta1sentimentanalysisresult.GoogleCloudDialogflowV2beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysis' }})
    
