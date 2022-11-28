from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPITopicsMediaTypeExtensionPathParams:
    media_type_extension: GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITopicsMediaTypeExtensionRequest:
    path_params: GetAPITopicsMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPITopicsMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
