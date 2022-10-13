from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1submission


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SubmitURIRequest:
    submission: Optional[googlecloudwebriskv1submission.GoogleCloudWebriskV1Submission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission' }})
    
