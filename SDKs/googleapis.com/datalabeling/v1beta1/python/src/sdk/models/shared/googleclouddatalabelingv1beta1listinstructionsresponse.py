from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListInstructionsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListInstructionsResponse
    Results of listing instructions under a project.
    """
    
    instructions: Optional[List[GoogleCloudDatalabelingV1beta1Instruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
