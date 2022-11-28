from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetBlogPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlogPageNameMediaTypeExtensionRequest:
    path_params: GetBlogPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetBlogPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
