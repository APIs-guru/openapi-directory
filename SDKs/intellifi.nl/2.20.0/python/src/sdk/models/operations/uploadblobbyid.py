from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UploadBlobByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadBlobByIDRequest:
    path_params: UploadBlobByIDPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadBlobByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
