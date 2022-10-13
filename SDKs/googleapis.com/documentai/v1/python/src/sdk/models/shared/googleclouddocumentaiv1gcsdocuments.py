from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1gcsdocument


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1GcsDocuments:
    documents: Optional[List[googleclouddocumentaiv1gcsdocument.GoogleCloudDocumentaiV1GcsDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    
