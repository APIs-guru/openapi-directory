from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import googlecloudvisionv1p2beta1inputconfig
from . import googlecloudvisionv1p2beta1annotateimageresponse


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AnnotateFileResponse:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    input_config: Optional[googlecloudvisionv1p2beta1inputconfig.GoogleCloudVisionV1p2beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    responses: Optional[List[googlecloudvisionv1p2beta1annotateimageresponse.GoogleCloudVisionV1p2beta1AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
