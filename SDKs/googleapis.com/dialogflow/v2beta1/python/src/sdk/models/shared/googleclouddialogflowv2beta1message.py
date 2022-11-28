from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1MessageInput:
    r"""GoogleCloudDialogflowV2beta1MessageInput
    Represents a message posted into a conversation.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    message_annotation: Optional[GoogleCloudDialogflowV2beta1MessageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageAnnotation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendTime') }})
    sentiment_analysis: Optional[GoogleCloudDialogflowV2beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysis') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Message:
    r"""GoogleCloudDialogflowV2beta1Message
    Represents a message posted into a conversation.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    message_annotation: Optional[GoogleCloudDialogflowV2beta1MessageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageAnnotation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant') }})
    participant_role: Optional[GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participantRole') }})
    send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendTime') }})
    sentiment_analysis: Optional[GoogleCloudDialogflowV2beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysis') }})
    
