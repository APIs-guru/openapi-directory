from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ImageSource:
    gcs_image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsImageUri' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    
