from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEnabledBuiltInVariablesResponse:
    r"""ListEnabledBuiltInVariablesResponse
    A list of enabled built-in variables.
    """
    
    built_in_variable: Optional[List[BuiltInVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInVariable') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
