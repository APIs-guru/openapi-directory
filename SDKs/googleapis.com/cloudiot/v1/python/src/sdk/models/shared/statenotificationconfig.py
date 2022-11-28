from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StateNotificationConfig:
    r"""StateNotificationConfig
    The configuration for notification of new states received from the device.
    """
    
    pubsub_topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopicName') }})
    
