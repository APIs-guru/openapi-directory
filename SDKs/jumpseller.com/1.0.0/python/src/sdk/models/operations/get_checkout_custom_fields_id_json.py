from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCheckoutCustomFieldsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckoutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckoutCustomFieldsIDJSONRequest:
    path_params: GetCheckoutCustomFieldsIDJSONPathParams = field(default=None)
    query_params: GetCheckoutCustomFieldsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetCheckoutCustomFieldsIDJSONResponse:
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
