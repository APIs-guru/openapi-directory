from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResponse:
    r"""SearchResponse
    The response to a search request for the authenticated user, given a query.
    """
    
    results: Optional[List[SearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
