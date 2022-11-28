from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPlaceActionLinksResponse:
    r"""ListPlaceActionLinksResponse
    Response message for PlaceActions.ListPlaceActionLinks.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    place_action_links: Optional[List[PlaceActionLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionLinks') }})
    
