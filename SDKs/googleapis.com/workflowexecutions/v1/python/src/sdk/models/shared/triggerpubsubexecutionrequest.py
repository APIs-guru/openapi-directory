from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TriggerPubsubExecutionRequest:
    r"""TriggerPubsubExecutionRequest
    Request for the TriggerPubsubExecution method.
    """
    
    gcp_cloud_events_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCPCloudEventsMode') }})
    message: Optional[PubsubMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
