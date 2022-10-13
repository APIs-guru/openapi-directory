from dataclasses import dataclass, field
from typing import Enum

class GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsQuestionPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsQuestionPageNameMediaTypeExtensionRequest:
    path_params: GetEsQuestionPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetEsQuestionPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
