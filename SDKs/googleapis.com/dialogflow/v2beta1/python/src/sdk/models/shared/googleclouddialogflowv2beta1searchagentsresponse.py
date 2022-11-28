from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SearchAgentsResponse:
    r"""GoogleCloudDialogflowV2beta1SearchAgentsResponse
    The response message for Agents.SearchAgents.
    """
    
    agents: Optional[List[GoogleCloudDialogflowV2beta1Agent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
