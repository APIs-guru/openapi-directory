from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1ParticipantRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Participant:
    documents_metadata_filters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentsMetadataFilters' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    obfuscated_external_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedExternalUserId' }})
    role: Optional[GoogleCloudDialogflowV2beta1ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
