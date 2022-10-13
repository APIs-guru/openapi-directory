from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1imagesource


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Image:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    source: Optional[googlecloudvisionv1p2beta1imagesource.GoogleCloudVisionV1p2beta1ImageSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
