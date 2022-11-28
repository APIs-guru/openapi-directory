from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIArticlesMediaTypeExtensionPathParams:
    media_type_extension: GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIArticlesMediaTypeExtensionRequest:
    path_params: GetAPIArticlesMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPIArticlesMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
