from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventNotificationConfig:
    r"""EventNotificationConfig
    The configuration for forwarding telemetry events.
    """
    
    pubsub_topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopicName') }})
    subfolder_matches: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subfolderMatches') }})
    
