from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Snippet:
    r"""Snippet
    Snippet of the search result, which summarizes the content of the resulting page.
    """
    
    match_ranges: Optional[List[MatchRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchRanges') }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
