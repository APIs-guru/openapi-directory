from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIBlogMediaTypeExtensionPathParams:
    media_type_extension: GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIBlogMediaTypeExtensionRequest:
    path_params: GetAPIBlogMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPIBlogMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
