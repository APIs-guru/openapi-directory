from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fulfillmentfields


@dataclass_json
@dataclass
class Fulfillment:
    category: Optional[fulfillmentfields.FulfillmentFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
