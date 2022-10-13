from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationKey:
    explicit_no_place_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitNoPlaceId' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    plus_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plusPageId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
