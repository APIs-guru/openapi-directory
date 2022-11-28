from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    Metadata about a subscription resource.
    """
    
    delivery_config: Optional[DeliveryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
