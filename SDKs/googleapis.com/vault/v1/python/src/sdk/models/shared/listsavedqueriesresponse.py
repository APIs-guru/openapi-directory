from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSavedQueriesResponse:
    r"""ListSavedQueriesResponse
    Definition of the response for method ListSaveQuery.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    saved_queries: Optional[List[SavedQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savedQueries') }})
    
