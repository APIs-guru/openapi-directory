from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListAgentsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListAgentsResponse
    The response message for Agents.ListAgents.
    """
    
    agents: Optional[List[GoogleCloudDialogflowCxV3beta1Agent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
