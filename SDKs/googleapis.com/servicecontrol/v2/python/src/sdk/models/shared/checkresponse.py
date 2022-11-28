from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckResponse:
    r"""CheckResponse
    Response message for the Check method.
    """
    
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
