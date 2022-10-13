from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1example


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListExamplesResponse:
    examples: Optional[List[googleclouddatalabelingv1beta1example.GoogleCloudDatalabelingV1beta1Example]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'examples' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
