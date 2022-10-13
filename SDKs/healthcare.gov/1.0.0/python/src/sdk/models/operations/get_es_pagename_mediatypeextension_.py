from dataclasses import dataclass, field
from typing import Enum

class GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsPageNameMediaTypeExtensionRequest:
    path_params: GetEsPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetEsPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
