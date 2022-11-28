from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCommentsResponse:
    r"""ListCommentsResponse
    The response message for the ListComments endpoint.
    """
    
    comments: Optional[List[Comment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
