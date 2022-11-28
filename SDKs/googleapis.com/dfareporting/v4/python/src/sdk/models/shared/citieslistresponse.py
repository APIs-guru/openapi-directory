from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CitiesListResponse:
    r"""CitiesListResponse
    City List Response
    """
    
    cities: Optional[List[City]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
