from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall:
    r"""GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall
    Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
    """
    
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
