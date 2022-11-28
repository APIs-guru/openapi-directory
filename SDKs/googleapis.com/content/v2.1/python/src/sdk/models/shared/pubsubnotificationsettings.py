from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PubsubNotificationSettings:
    r"""PubsubNotificationSettings
    Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
    """
    
    cloud_topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudTopicName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    registered_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredEvents') }})
    
