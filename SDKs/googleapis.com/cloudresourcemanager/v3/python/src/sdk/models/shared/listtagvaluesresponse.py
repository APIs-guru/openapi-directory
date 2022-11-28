from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTagValuesResponse:
    r"""ListTagValuesResponse
    The ListTagValues response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tag_values: Optional[List[TagValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    
