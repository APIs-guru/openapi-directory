from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsStateNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    state_name: str = field(metadata={'path_param': { 'field_name': 'stateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsStateNameMediaTypeExtensionRequest:
    path_params: GetEsStateNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetEsStateNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
