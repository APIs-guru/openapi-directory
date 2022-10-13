from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3gcsdocuments
from . import googleclouddocumentaiv1beta3gcsprefix


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig:
    gcs_documents: Optional[googleclouddocumentaiv1beta3gcsdocuments.GoogleCloudDocumentaiV1beta3GcsDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDocuments' }})
    gcs_prefix: Optional[googleclouddocumentaiv1beta3gcsprefix.GoogleCloudDocumentaiV1beta3GcsPrefix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsPrefix' }})
    
