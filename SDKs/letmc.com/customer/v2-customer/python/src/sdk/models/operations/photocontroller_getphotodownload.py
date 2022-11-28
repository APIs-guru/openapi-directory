from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PhotoControllerGetPhotoDownloadPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhotoControllerGetPhotoDownloadQueryParams:
    photo_id: str = field(metadata={'query_param': { 'field_name': 'photoID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class PhotoControllerGetPhotoDownloadRequest:
    path_params: PhotoControllerGetPhotoDownloadPathParams = field()
    query_params: PhotoControllerGetPhotoDownloadQueryParams = field()
    

@dataclass
class PhotoControllerGetPhotoDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
