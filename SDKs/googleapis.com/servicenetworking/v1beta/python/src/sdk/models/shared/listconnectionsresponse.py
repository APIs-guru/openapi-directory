from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConnectionsResponse:
    r"""ListConnectionsResponse
    ListConnectionsResponse is the response to list peering states for the given service and consumer project.
    """
    
    connections: Optional[List[GoogleCloudServicenetworkingV1betaConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
