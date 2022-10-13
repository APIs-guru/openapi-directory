from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig:
    gcs_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
