from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListIntentsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListIntentsResponse
    The response message for Intents.ListIntents.
    """
    
    intents: Optional[List[GoogleCloudDialogflowCxV3beta1Intent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
