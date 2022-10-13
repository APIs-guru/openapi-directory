from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1pipeline


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1ListPipelinesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    pipelines: Optional[List[googleclouddatapipelinesv1pipeline.GoogleCloudDatapipelinesV1Pipeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelines' }})
    
