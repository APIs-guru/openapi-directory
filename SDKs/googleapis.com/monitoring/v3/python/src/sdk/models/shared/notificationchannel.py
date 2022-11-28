from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NotificationChannelVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "VERIFICATION_STATUS_UNSPECIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFIED = "VERIFIED"


@dataclass_json
@dataclass
class NotificationChannel:
    r"""NotificationChannel
    A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
    """
    
    creation_record: Optional[MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationRecord') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mutation_records: Optional[List[MutationRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationRecords') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    verification_status: Optional[NotificationChannelVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    
