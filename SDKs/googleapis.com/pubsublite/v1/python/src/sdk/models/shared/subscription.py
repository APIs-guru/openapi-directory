from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deliveryconfig


@dataclass_json
@dataclass
class Subscription:
    delivery_config: Optional[deliveryconfig.DeliveryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
