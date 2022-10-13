from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1asyncannotatefilerequest


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[googlecloudvisionv1p2beta1asyncannotatefilerequest.GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
