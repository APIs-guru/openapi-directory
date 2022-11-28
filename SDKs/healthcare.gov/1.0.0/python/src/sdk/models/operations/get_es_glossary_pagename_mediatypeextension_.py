from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionRequest:
    path_params: GetEsGlossaryPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetEsGlossaryPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
