from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
    Results for listing FeedbackThreads.
    """
    
    feedback_threads: Optional[List[GoogleCloudDatalabelingV1beta1FeedbackThread]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackThreads') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
