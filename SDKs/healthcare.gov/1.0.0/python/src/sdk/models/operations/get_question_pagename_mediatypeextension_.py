from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum(str, Enum):
    DOT_JSON = ".json"


@dataclass
class GetQuestionPageNameMediaTypeExtensionPathParams:
    media_type_extension: GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = field(metadata={'path_param': { 'field_name': 'mediaTypeExtension', 'style': 'simple', 'explode': False }})
    page_name: str = field(metadata={'path_param': { 'field_name': 'pageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuestionPageNameMediaTypeExtensionRequest:
    path_params: GetQuestionPageNameMediaTypeExtensionPathParams = field()
    

@dataclass
class GetQuestionPageNameMediaTypeExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
