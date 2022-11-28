from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsBlogPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsBlogPageNameMediaTypeExtensionRequest:
    path_params: GetEsBlogPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetEsBlogPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
