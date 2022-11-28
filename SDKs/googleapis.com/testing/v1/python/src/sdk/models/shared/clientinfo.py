from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientInfo:
    r"""ClientInfo
    Information about the client which invoked the test.
    """
    
    client_info_details: Optional[List[ClientInfoDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfoDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
