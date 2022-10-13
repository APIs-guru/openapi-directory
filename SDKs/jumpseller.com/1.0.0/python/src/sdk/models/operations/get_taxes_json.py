from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTaxesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaxesJSONRequest:
    query_params: GetTaxesJSONQueryParams = field(default=None)
    

@dataclass
class GetTaxesJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taxes: Optional[List[shared.Tax]] = field(default=None)
    
