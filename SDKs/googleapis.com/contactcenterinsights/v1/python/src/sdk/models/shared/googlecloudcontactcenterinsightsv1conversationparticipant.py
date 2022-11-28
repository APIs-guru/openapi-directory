from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"
    ANY_AGENT = "ANY_AGENT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationParticipant:
    r"""GoogleCloudContactcenterinsightsV1ConversationParticipant
    The call participant speaking for a given utterance.
    """
    
    dialogflow_participant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowParticipant') }})
    dialogflow_participant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowParticipantName') }})
    obfuscated_external_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalUserId') }})
    role: Optional[GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
