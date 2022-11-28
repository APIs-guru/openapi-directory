from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListContextsResponse:
    r"""GoogleCloudDialogflowV2beta1ListContextsResponse
    The response message for Contexts.ListContexts.
    """
    
    contexts: Optional[List[GoogleCloudDialogflowV2beta1Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
