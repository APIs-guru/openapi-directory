from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesLanguagesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesLanguagesIDJSONRequest:
    path_params: GetResourcesLanguagesIDJSONPathParams = field()
    

@dataclass
class GetResourcesLanguagesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    language_wrappeds: Optional[List[shared.LanguageWrapped]] = field(default=None)
    
