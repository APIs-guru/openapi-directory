from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cardobjecttypebody


@dataclass_json
@dataclass
class CardFetchBodyPatch:
    object_types: List[cardobjecttypebody.CardObjectTypeBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypes' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    
