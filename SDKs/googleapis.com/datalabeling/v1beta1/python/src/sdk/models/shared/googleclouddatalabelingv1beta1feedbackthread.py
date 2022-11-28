from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1FeedbackThread:
    r"""GoogleCloudDatalabelingV1beta1FeedbackThread
    A feedback thread of a certain labeling task on a certain annotated dataset.
    """
    
    feedback_thread_metadata: Optional[GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackThreadMetadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
