from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ListEvaluationsResponse:
    r"""GoogleCloudDocumentaiV1beta3ListEvaluationsResponse
    The response from ListEvaluations.
    """
    
    evaluations: Optional[List[GoogleCloudDocumentaiV1beta3Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
