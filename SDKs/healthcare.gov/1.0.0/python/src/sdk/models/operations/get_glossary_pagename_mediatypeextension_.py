from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetGlossaryPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGlossaryPageNameMediaTypeExtensionRequest:
    path_params: GetGlossaryPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetGlossaryPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
