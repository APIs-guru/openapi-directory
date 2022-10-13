from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__trial


@dataclass_json
@dataclass
class GoogleCloudMlV1ListTrialsResponse:
    trials: Optional[List[googlecloudmlv1__trial.GoogleCloudMlV1Trial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trials' }})
    
