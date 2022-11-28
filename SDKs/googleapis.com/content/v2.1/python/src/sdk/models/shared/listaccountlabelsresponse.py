from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAccountLabelsResponse:
    r"""ListAccountLabelsResponse
    Response message for the `ListAccountLabels` method.
    """
    
    account_labels: Optional[List[AccountLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLabels') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
