from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2ParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Participant:
    r"""GoogleCloudDialogflowV2Participant
    Represents a conversation participant (human agent, virtual agent, end-user).
    """
    
    documents_metadata_filters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentsMetadataFilters') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_external_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalUserId') }})
    role: Optional[GoogleCloudDialogflowV2ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    sip_recording_media_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sipRecordingMediaLabel') }})
    
