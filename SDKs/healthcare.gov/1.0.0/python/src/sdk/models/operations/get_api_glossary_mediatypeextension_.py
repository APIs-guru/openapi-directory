from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIGlossaryMediaTypeExtensionPathParams:
    media_type_extension: GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIGlossaryMediaTypeExtensionRequest:
    path_params: GetAPIGlossaryMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPIGlossaryMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
