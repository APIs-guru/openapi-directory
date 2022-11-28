from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInstancesRequests:
    application_dicom: bytes = field(metadata={'request': { 'media_type': 'application/dicom' }})
    application_zip: bytes = field(metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class PostInstancesRequest:
    request: Optional[PostInstancesRequests] = field(default=None)
    

@dataclass
class PostInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    post_instances_200_application_json_any: Optional[Any] = field(default=None)
    
