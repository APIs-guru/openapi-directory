from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ConversationPhoneNumber:
    r"""GoogleCloudDialogflowV2beta1ConversationPhoneNumber
    Represents a phone number for telephony integration. It allows for connecting a particular conversation over telephony.
    """
    
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
