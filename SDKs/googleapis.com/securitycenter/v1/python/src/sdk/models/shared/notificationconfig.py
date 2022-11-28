from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationConfigInput:
    r"""NotificationConfigInput
    Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    streaming_config: Optional[StreamingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingConfig') }})
    

@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    streaming_config: Optional[StreamingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingConfig') }})
    
