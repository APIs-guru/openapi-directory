from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessage:
    r"""GoogleCloudDialogflowV2beta1ResponseMessage
    Response messages from an automated agent.
    """
    
    end_interaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endInteraction') }})
    live_agent_handoff: Optional[GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveAgentHandoff') }})
    mixed_audio: Optional[GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixedAudio') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowV2beta1ResponseMessageText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
