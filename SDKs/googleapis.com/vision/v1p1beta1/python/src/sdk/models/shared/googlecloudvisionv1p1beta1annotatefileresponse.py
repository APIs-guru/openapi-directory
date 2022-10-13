from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import googlecloudvisionv1p1beta1inputconfig
from . import googlecloudvisionv1p1beta1annotateimageresponse


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AnnotateFileResponse:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    input_config: Optional[googlecloudvisionv1p1beta1inputconfig.GoogleCloudVisionV1p1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    responses: Optional[List[googlecloudvisionv1p1beta1annotateimageresponse.GoogleCloudVisionV1p1beta1AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
