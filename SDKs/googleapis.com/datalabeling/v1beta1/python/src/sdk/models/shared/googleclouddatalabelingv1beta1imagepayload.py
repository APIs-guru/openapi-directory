from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImagePayload:
    image_thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageThumbnail' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    signed_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signedUri' }})
    
