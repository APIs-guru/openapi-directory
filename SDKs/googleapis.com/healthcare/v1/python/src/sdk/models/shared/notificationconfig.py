from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    Specifies where to send notifications upon changes to a data store.
    """
    
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    
