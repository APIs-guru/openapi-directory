from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientStatusRequest:
    r"""ClientStatusRequest
    Request for client status of clients identified by a list of NodeMatchers.
    """
    
    node_matchers: Optional[List[NodeMatcher]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeMatchers') }})
    
