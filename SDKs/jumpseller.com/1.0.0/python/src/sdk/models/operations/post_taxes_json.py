from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostTaxesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTaxesJSONRequest:
    query_params: PostTaxesJSONQueryParams = field()
    request: shared.TaxEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTaxesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    tax: Optional[shared.Tax] = field(default=None)
    
