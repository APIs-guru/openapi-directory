from dataclasses import dataclass, field
from typing import Enum

class GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIQuestionsMediaTypeExtensionPathParams:
    media_type_extension: GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIQuestionsMediaTypeExtensionRequest:
    path_params: GetAPIQuestionsMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetAPIQuestionsMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
