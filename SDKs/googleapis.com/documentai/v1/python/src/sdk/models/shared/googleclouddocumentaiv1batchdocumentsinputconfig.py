from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1gcsdocuments
from . import googleclouddocumentaiv1gcsprefix


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1BatchDocumentsInputConfig:
    gcs_documents: Optional[googleclouddocumentaiv1gcsdocuments.GoogleCloudDocumentaiV1GcsDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDocuments' }})
    gcs_prefix: Optional[googleclouddocumentaiv1gcsprefix.GoogleCloudDocumentaiV1GcsPrefix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsPrefix' }})
    
