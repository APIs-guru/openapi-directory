from dataclasses import dataclass, field
from typing import Enum

class GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPITopicsMediaTypeExtensionPathParams:
    media_type_extension: GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITopicsMediaTypeExtensionRequest:
    path_params: GetAPITopicsMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPITopicsMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
