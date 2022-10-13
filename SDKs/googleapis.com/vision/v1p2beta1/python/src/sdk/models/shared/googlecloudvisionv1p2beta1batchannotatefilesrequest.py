from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1annotatefilerequest


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[googlecloudvisionv1p2beta1annotatefilerequest.GoogleCloudVisionV1p2beta1AnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
