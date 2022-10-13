from dataclasses import dataclass, field
from typing import Enum

class GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsBlogPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsBlogPageNameMediaTypeExtensionRequest:
    path_params: GetEsBlogPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetEsBlogPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
