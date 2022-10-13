from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import review


@dataclass_json
@dataclass
class LocationReview:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    review: Optional[review.Review] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review' }})
    
