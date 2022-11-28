from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalListNodesResponse:
    r"""SasPortalListNodesResponse
    Response for ListNodes.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    nodes: Optional[List[SasPortalNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
