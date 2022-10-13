from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placeactiontypemetadata


@dataclass_json
@dataclass
class ListPlaceActionTypeMetadataResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    place_action_type_metadata: Optional[List[placeactiontypemetadata.PlaceActionTypeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeActionTypeMetadata' }})
    
