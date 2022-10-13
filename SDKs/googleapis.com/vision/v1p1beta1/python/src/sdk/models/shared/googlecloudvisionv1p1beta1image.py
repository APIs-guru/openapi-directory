from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1imagesource


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Image:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    source: Optional[googlecloudvisionv1p1beta1imagesource.GoogleCloudVisionV1p1beta1ImageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
