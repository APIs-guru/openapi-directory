from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1processor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ListProcessorsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    processors: Optional[List[googleclouddocumentaiv1processor.GoogleCloudDocumentaiV1Processor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processors' }})
    
