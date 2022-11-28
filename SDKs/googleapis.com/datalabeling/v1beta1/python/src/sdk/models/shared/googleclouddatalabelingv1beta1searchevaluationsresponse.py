from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse:
    r"""GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
    Results of searching evaluations.
    """
    
    evaluations: Optional[List[GoogleCloudDatalabelingV1beta1Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
