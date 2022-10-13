from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__study


@dataclass_json
@dataclass
class GoogleCloudMlV1ListStudiesResponse:
    studies: Optional[List[googlecloudmlv1__study.GoogleCloudMlV1Study]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studies' }})
    
