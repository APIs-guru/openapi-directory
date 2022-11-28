from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListActionsResponse:
    r"""GoogleCloudDataplexV1ListActionsResponse
    List actions response.
    """
    
    actions: Optional[List[GoogleCloudDataplexV1Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
