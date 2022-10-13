from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PhotoControllerGetPhotoDownloadPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PhotoControllerGetPhotoDownloadQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    photo_id: str = field(default=None, metadata={'query_param': { 'field_name': 'photoID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class PhotoControllerGetPhotoDownloadRequest:
    path_params: PhotoControllerGetPhotoDownloadPathParams = field(default=None)
    query_params: PhotoControllerGetPhotoDownloadQueryParams = field(default=None)
    

@dataclass
class PhotoControllerGetPhotoDownloadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
