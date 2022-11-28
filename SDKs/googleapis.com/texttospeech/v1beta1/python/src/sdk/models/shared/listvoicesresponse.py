from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVoicesResponse:
    r"""ListVoicesResponse
    The message returned to the client by the `ListVoices` method.
    """
    
    voices: Optional[List[Voice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voices') }})
    
