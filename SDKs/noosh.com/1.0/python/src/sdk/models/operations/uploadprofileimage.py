from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UploadProfileImagePathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadProfileImageRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    wildcard: bytes = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    binary_string: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    binary_string1: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class UploadProfileImageRequest:
    path_params: UploadProfileImagePathParams = field(default=None)
    request: Optional[UploadProfileImageRequests] = field(default=None)
    

@dataclass
class UploadProfileImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    profile_image_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
