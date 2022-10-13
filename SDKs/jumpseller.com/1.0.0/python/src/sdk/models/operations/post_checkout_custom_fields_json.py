from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCheckoutCustomFieldsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCheckoutCustomFieldsJSONRequest:
    query_params: PostCheckoutCustomFieldsJSONQueryParams = field(default=None)
    request: shared.CheckoutCustomFieldEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCheckoutCustomFieldsJSONResponse:
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
