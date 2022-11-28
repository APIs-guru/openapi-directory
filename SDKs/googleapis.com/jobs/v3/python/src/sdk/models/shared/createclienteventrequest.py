from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClientEventRequest:
    r"""CreateClientEventRequest
    The report event request.
    """
    
    client_event: Optional[ClientEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEvent') }})
    
