from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Hl7V2NotificationConfig:
    r"""Hl7V2NotificationConfig
    Specifies where and whether to send notifications upon changes to a data store.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    
