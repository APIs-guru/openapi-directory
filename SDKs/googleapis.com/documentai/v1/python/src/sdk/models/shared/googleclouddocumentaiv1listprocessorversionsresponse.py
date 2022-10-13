from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1processorversion


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ListProcessorVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    processor_versions: Optional[List[googleclouddocumentaiv1processorversion.GoogleCloudDocumentaiV1ProcessorVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processorVersions' }})
    
