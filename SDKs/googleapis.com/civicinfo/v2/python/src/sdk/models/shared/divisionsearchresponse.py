from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DivisionSearchResponse:
    r"""DivisionSearchResponse
    The result of a division search query.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    results: Optional[List[DivisionSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
