from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2ParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Participant:
    documents_metadata_filters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentsMetadataFilters' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[GoogleCloudDialogflowV2ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    sip_recording_media_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sipRecordingMediaLabel' }})
    
