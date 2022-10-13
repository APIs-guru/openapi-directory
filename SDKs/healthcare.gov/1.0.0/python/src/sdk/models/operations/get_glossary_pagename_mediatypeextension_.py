from dataclasses import dataclass, field
from typing import Enum

class GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetGlossaryPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGlossaryPageNameMediaTypeExtensionRequest:
    path_params: GetGlossaryPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetGlossaryPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
