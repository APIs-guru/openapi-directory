from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostTaxesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTaxesJSONRequest:
    query_params: PostTaxesJSONQueryParams = field(default=None)
    request: shared.TaxEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTaxesJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tax: Optional[shared.Tax] = field(default=None)
    
