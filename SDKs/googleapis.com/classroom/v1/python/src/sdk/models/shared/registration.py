from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Registration:
    r"""Registration
    An instruction to Classroom to send notifications from the `feed` to the provided destination.
    """
    
    cloud_pubsub_topic: Optional[CloudPubsubTopic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudPubsubTopic') }})
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    feed: Optional[Feed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationId') }})
    
