from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EnvironmentHistory:
    r"""GoogleCloudDialogflowV2beta1EnvironmentHistory
    The response message for Environments.GetEnvironmentHistory.
    """
    
    entries: Optional[List[GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
