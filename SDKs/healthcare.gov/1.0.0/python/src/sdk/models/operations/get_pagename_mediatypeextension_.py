from dataclasses import dataclass, field
from typing import Enum

class GetPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPageNameMediaTypeExtensionRequest:
    path_params: GetPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
