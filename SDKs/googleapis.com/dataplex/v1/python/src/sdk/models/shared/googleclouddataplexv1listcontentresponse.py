from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListContentResponse:
    r"""GoogleCloudDataplexV1ListContentResponse
    List content response.
    """
    
    content: Optional[List[GoogleCloudDataplexV1Content]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
