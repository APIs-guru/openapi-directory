from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsTagLanguagesFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsTagLanguagesFormatRequest:
    path_params: GetResourcesTagsTagLanguagesFormatPathParams = field(default=None)
    

@dataclass
class GetResourcesTagsTagLanguagesFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_language_marshaller_wrappeds: Optional[List[shared.TagLanguageMarshallerWrapped]] = field(default=None)
    
