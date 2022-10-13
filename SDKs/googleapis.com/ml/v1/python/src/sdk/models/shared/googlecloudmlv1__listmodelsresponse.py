from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__model


@dataclass_json
@dataclass
class GoogleCloudMlV1ListModelsResponse:
    models: Optional[List[googlecloudmlv1__model.GoogleCloudMlV1Model]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
