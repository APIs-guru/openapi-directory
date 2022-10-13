from dataclasses import dataclass, field
from typing import Enum

class GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIBlogMediaTypeExtensionPathParams:
    media_type_extension: GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIBlogMediaTypeExtensionRequest:
    path_params: GetAPIBlogMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPIBlogMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
