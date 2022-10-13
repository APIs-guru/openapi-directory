from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1gcssource


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1InputConfig:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    gcs_source: Optional[googlecloudvisionv1p2beta1gcssource.GoogleCloudVisionV1p2beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
