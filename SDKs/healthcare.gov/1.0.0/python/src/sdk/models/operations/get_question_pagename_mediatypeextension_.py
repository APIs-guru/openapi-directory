from dataclasses import dataclass, field
from typing import Enum

class GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetQuestionPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(default=None, metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(default=None, metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuestionPageNameMediaTypeExtensionRequest:
    path_params: GetQuestionPageNameMediaTypeExtensionPathParams = field(default=None)
    

@dataclass
class GetQuestionPageNameMediaTypeExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
