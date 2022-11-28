from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullResponse:
    r"""PullResponse
    Either a PubsubMessage or a truncation event. One of these two must be populated.
    """
    
    ack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ackId') }})
    pubsub_event: Optional[PubsubEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubEvent') }})
    
