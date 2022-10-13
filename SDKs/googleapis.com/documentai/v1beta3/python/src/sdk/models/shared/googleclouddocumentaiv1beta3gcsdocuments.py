from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3gcsdocument


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3GcsDocuments:
    documents: Optional[List[googleclouddocumentaiv1beta3gcsdocument.GoogleCloudDocumentaiV1beta3GcsDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    
