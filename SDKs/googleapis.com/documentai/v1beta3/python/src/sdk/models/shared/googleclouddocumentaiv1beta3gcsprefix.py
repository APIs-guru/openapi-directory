from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3GcsPrefix:
    gcs_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUriPrefix' }})
    
