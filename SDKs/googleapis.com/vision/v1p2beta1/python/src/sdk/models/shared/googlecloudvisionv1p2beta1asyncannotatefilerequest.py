from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1feature
from . import googlecloudvisionv1p2beta1imagecontext
from . import googlecloudvisionv1p2beta1inputconfig
from . import googlecloudvisionv1p2beta1outputconfig


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest:
    features: Optional[List[googlecloudvisionv1p2beta1feature.GoogleCloudVisionV1p2beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image_context: Optional[googlecloudvisionv1p2beta1imagecontext.GoogleCloudVisionV1p2beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    input_config: Optional[googlecloudvisionv1p2beta1inputconfig.GoogleCloudVisionV1p2beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    output_config: Optional[googlecloudvisionv1p2beta1outputconfig.GoogleCloudVisionV1p2beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
