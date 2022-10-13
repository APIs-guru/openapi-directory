from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCheckoutCustomFieldsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckoutCustomFieldsJSONRequest:
    query_params: GetCheckoutCustomFieldsJSONQueryParams = field(default=None)
    

@dataclass
class GetCheckoutCustomFieldsJSONResponse:
    checkout_custom_fields: Optional[List[shared.CheckoutCustomField]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
