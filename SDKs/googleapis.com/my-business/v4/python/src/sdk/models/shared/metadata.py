from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import duplicate


@dataclass_json
@dataclass
class Metadata:
    duplicate: Optional[duplicate.Duplicate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicate' }})
    maps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapsUrl' }})
    new_review_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newReviewUrl' }})
    
