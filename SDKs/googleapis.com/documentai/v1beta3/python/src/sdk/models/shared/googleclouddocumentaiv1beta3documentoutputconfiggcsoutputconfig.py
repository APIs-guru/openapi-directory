from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig:
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMask' }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    
