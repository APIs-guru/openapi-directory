from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddProtectedRangeResponse:
    r"""AddProtectedRangeResponse
    The result of adding a new protected range.
    """
    
    protected_range: Optional[ProtectedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRange') }})
    
