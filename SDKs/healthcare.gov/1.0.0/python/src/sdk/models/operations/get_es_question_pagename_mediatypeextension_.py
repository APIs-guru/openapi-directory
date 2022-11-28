from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetEsQuestionPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEsQuestionPageNameMediaTypeExtensionRequest:
    path_params: GetEsQuestionPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetEsQuestionPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
