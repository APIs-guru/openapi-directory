from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2gcssource


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2InputConfig:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    gcs_source: Optional[googleclouddocumentaiv1beta2gcssource.GoogleCloudDocumentaiV1beta2GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
