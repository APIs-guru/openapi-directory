from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestResponse:
    r"""SuggestResponse
    Response of the suggest API.
    """
    
    suggest_results: Optional[List[SuggestResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestResults') }})
    
