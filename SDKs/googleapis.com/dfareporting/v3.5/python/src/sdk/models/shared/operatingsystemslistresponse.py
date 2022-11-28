from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperatingSystemsListResponse:
    r"""OperatingSystemsListResponse
    Operating System List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operating_systems: Optional[List[OperatingSystem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    
