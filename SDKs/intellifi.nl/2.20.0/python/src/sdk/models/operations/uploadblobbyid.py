from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UploadBlobByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadBlobByIDRequest:
    path_params: UploadBlobByIDPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadBlobByIDResponse:
    content_type: str = field()
    status_code: int = field()
    
