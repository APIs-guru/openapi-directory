from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStreamObjectsResponse:
    r"""ListStreamObjectsResponse
    Response containing the objects for a stream.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    stream_objects: Optional[List[StreamObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamObjects') }})
    
