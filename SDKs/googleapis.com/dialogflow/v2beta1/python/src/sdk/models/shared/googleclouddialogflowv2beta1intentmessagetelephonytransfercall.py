from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall:
    r"""GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall
    Transfers the call in Telephony Gateway.
    """
    
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
