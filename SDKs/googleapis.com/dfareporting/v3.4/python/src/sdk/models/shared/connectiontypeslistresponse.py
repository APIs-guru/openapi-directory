from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionTypesListResponse:
    r"""ConnectionTypesListResponse
    Connection Type List Response
    """
    
    connection_types: Optional[List[ConnectionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionTypes') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
