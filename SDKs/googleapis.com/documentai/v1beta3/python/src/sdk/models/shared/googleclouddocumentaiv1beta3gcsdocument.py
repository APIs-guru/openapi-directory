from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3GcsDocument:
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
