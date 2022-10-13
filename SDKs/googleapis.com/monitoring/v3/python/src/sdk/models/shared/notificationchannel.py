from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mutationrecord
from . import mutationrecord

class NotificationChannelVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "VERIFICATION_STATUS_UNSPECIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFIED = "VERIFIED"


@dataclass_json
@dataclass
class NotificationChannel:
    creation_record: Optional[mutationrecord.MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationRecord' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mutation_records: Optional[List[mutationrecord.MutationRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutationRecords' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    verification_status: Optional[NotificationChannelVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationStatus' }})
    
