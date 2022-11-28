from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsTagLanguagesFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsTagLanguagesFormatRequest:
    path_params: GetResourcesTagsTagLanguagesFormatPathParams = field()
    

@dataclass
class GetResourcesTagsTagLanguagesFormatResponse:
    content_type: str = field()
    status_code: int = field()
    tag_language_marshaller_wrappeds: Optional[List[shared.TagLanguageMarshallerWrapped]] = field(default=None)
    
