from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCheckoutCustomFieldsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCheckoutCustomFieldsJSONRequest:
    query_params: PostCheckoutCustomFieldsJSONQueryParams = field()
    request: shared.CheckoutCustomFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCheckoutCustomFieldsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
