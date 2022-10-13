from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBlobByIDPathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlobByIDRequest:
    path_params: GetBlobByIDPathParams = field(default=None)
    

@dataclass
class GetBlobByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_blob_by_id_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    
