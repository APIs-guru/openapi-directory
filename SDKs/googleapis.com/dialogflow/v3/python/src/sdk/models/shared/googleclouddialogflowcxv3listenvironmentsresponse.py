from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListEnvironmentsResponse:
    r"""GoogleCloudDialogflowCxV3ListEnvironmentsResponse
    The response message for Environments.ListEnvironments.
    """
    
    environments: Optional[List[GoogleCloudDialogflowCxV3Environment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
