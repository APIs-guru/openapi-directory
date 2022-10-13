from dataclasses import dataclass, field
from typing import Enum

class GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsStateNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    state_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsStateNameMediaTypeExtensionRequest:
    path_params: GetEsStateNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetEsStateNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
