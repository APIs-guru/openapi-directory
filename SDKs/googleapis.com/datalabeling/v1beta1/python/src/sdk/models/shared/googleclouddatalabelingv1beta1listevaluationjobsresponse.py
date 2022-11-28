from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
    Results for listing evaluation jobs.
    """
    
    evaluation_jobs: Optional[List[GoogleCloudDatalabelingV1beta1EvaluationJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
