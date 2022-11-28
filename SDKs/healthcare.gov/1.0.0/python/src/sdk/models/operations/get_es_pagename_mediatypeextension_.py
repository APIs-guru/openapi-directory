from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsPageNameMediaTypeExtensionRequest:
    path_params: GetEsPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetEsPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
