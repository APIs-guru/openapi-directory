from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPageNameMediaTypeExtensionRequest:
    path_params: GetPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
