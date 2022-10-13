from dataclasses import dataclass, field
from typing import Enum

class GetStateNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetStateNameMediaTypeExtensionPathParams:
    media_type_extension: GetStateNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    state_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStateNameMediaTypeExtensionRequest:
    path_params: GetStateNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetStateNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
