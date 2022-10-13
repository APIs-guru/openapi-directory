from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1outputconfig
from . import googlecloudvisionv1p1beta1annotateimagerequest


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest:
    output_config: Optional[googlecloudvisionv1p1beta1outputconfig.GoogleCloudVisionV1p1beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[googlecloudvisionv1p1beta1annotateimagerequest.GoogleCloudVisionV1p1beta1AnnotateImageRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
