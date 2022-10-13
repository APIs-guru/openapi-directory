from dataclasses import dataclass, field
from typing import Enum

class GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIGlossaryMediaTypeExtensionPathParams:
    media_type_extension: GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIGlossaryMediaTypeExtensionRequest:
    path_params: GetAPIGlossaryMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPIGlossaryMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
