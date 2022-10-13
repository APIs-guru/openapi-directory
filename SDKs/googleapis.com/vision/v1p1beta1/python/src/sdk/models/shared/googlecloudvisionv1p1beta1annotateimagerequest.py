from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1feature
from . import googlecloudvisionv1p1beta1image
from . import googlecloudvisionv1p1beta1imagecontext


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AnnotateImageRequest:
    features: Optional[List[googlecloudvisionv1p1beta1feature.GoogleCloudVisionV1p1beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image: Optional[googlecloudvisionv1p1beta1image.GoogleCloudVisionV1p1beta1Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_context: Optional[googlecloudvisionv1p1beta1imagecontext.GoogleCloudVisionV1p1beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    
