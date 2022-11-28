from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListContextsResponse:
    r"""GoogleCloudDialogflowV2ListContextsResponse
    The response message for Contexts.ListContexts.
    """
    
    contexts: Optional[List[GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
