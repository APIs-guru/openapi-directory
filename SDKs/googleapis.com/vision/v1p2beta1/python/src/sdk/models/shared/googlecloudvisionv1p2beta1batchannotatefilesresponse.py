from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1annotatefileresponse


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse:
    responses: Optional[List[googlecloudvisionv1p2beta1annotatefileresponse.GoogleCloudVisionV1p2beta1AnnotateFileResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
