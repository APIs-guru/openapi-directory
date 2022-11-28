from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Detail:
    r"""Detail
    Contains multiple sensitive information findings for each resource slice.
    """
    
    findings: Optional[List[Finding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    
