from dataclasses import dataclass, field
from typing import Enum

class GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetBlogPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlogPageNameMediaTypeExtensionRequest:
    path_params: GetBlogPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetBlogPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
