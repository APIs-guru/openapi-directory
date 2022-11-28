from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetStateNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetStateNameMediaTypeExtensionPathParams:
    media_type_extension: GetStateNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    state_name: str = field(metadata={'path_param': { 'field_name': 'stateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStateNameMediaTypeExtensionRequest:
    path_params: GetStateNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetStateNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
