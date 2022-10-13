from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3processor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ListProcessorsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    processors: Optional[List[googleclouddocumentaiv1beta3processor.GoogleCloudDocumentaiV1beta3Processor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processors' }})
    
