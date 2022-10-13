from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1annotateimageresponse


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse:
    responses: Optional[List[googlecloudvisionv1p1beta1annotateimageresponse.GoogleCloudVisionV1p1beta1AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
