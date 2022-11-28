from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuerySource:
    r"""QuerySource
    List of sources that the user can search using the query API.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    operators: Optional[List[QueryOperator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operators') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortName') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
