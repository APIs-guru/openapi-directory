from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placeactionlink


@dataclass_json
@dataclass
class ListPlaceActionLinksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    place_action_links: Optional[List[placeactionlink.PlaceActionLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeActionLinks' }})
    
