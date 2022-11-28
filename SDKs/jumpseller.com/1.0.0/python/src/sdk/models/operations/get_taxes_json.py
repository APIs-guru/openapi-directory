from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTaxesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaxesJSONRequest:
    query_params: GetTaxesJSONQueryParams = field()
    

@dataclass
class GetTaxesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    taxes: Optional[List[shared.Tax]] = field(default=None)
    
