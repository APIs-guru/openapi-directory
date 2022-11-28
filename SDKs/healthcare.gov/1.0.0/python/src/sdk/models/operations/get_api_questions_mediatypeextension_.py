from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetAPIQuestionsMediaTypeExtensionPathParams:
    media_type_extension: GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIQuestionsMediaTypeExtensionRequest:
    path_params: GetAPIQuestionsMediaTypeExtensionPathParams = field()
    

@dataclass
class GetAPIQuestionsMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
