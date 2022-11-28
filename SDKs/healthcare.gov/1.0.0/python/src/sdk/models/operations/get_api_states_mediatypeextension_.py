from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIStatesMediaTypeExtensionPathParams:
    media_type_extension: GetAPIStatesMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIStatesMediaTypeExtensionRequest:
    path_params: GetAPIStatesMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPIStatesMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
