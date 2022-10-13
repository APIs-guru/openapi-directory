from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CollectionFeaturedProduct:
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x' }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y' }})
    
