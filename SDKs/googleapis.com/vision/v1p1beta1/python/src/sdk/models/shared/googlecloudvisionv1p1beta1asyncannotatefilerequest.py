from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1feature
from . import googlecloudvisionv1p1beta1imagecontext
from . import googlecloudvisionv1p1beta1inputconfig
from . import googlecloudvisionv1p1beta1outputconfig


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest:
    features: Optional[List[googlecloudvisionv1p1beta1feature.GoogleCloudVisionV1p1beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image_context: Optional[googlecloudvisionv1p1beta1imagecontext.GoogleCloudVisionV1p1beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    input_config: Optional[googlecloudvisionv1p1beta1inputconfig.GoogleCloudVisionV1p1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    output_config: Optional[googlecloudvisionv1p1beta1outputconfig.GoogleCloudVisionV1p1beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
