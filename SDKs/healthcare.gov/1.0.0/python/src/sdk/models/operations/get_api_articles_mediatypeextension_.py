from dataclasses import dataclass, field
from typing import Enum

class GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIArticlesMediaTypeExtensionPathParams:
    media_type_extension: GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIArticlesMediaTypeExtensionRequest:
    path_params: GetAPIArticlesMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPIArticlesMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
