from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2processdocumentrequest


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest:
    requests: Optional[List[googleclouddocumentaiv1beta2processdocumentrequest.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
