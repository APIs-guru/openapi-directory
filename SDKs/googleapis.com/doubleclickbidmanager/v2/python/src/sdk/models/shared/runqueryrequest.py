from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunQueryRequest:
    r"""RunQueryRequest
    Request to run a stored query to generate a report.
    """
    
    data_range: Optional[DataRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    
