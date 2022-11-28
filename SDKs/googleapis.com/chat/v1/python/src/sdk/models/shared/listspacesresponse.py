from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSpacesResponse:
    r"""ListSpacesResponse
    The response corresponding to ListSpacesRequest.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    spaces: Optional[List[Space]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaces') }})
    
