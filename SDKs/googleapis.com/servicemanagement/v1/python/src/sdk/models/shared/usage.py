from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Usage:
    r"""Usage
    Configuration controlling usage of a service.
    """
    
    producer_notification_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerNotificationChannel') }})
    requirements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirements') }})
    rules: Optional[List[UsageRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
