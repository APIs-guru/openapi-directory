from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ElectionsQueryResponse:
    r"""ElectionsQueryResponse
    The list of elections available for this version of the API.
    """
    
    elections: Optional[List[Election]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elections') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
