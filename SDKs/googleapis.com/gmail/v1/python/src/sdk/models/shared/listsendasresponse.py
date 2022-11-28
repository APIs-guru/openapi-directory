from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSendAsResponse:
    r"""ListSendAsResponse
    Response for the ListSendAs method.
    """
    
    send_as: Optional[List[SendAs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendAs') }})
    
