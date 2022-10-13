from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesLanguagesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesLanguagesIDJSONRequest:
    path_params: GetResourcesLanguagesIDJSONPathParams = field(default=None)
    

@dataclass
class GetResourcesLanguagesIDJSONResponse:
    content_type: str = field(default=None)
    language_wrappeds: Optional[List[shared.LanguageWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
