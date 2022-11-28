from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPlaceActionTypeMetadataResponse:
    r"""ListPlaceActionTypeMetadataResponse
    Response message for PlaceActions.ListPlaceActionTypeMetadata.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    place_action_type_metadata: Optional[List[PlaceActionTypeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionTypeMetadata') }})
    
