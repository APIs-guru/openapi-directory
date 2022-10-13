from dataclasses import dataclass, field
from typing import Enum

class GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionRequest:
    path_params: GetEsGlossaryPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
