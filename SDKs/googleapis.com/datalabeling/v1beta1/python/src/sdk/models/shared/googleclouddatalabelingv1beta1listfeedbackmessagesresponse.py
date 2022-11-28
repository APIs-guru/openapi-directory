from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse:
    r"""GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
    Results for listing FeedbackMessages.
    """
    
    feedback_messages: Optional[List[GoogleCloudDatalabelingV1beta1FeedbackMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackMessages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
