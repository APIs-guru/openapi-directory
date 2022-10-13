from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesLanguagesJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesLanguagesJSONRequest:
    query_params: GetResourcesLanguagesJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesLanguagesJSONResponse:
    content_type: str = field(default=None)
    language_wrappeds: Optional[List[shared.LanguageWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
