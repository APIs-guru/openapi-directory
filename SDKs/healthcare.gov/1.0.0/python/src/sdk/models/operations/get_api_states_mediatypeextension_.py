from dataclasses import dataclass, field
from typing import Enum

class GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIStatesMediaTypeExtensionPathParams:
    media_type_extension: GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIStatesMediaTypeExtensionRequest:
    path_params: GetAPIStatesMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPIStatesMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
