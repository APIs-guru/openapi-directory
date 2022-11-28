from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SubmitURIRequest:
    r"""GoogleCloudWebriskV1SubmitURIRequest
    Request to send a potentially malicious URI to WebRisk.
    """
    
    submission: Optional[GoogleCloudWebriskV1Submission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    
