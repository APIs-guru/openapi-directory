from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import cardobjecttypebody


@dataclass_json
@dataclass
class CardFetchBody:
    object_types: List[cardobjecttypebody.CardObjectTypeBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypes' }})
    target_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    
