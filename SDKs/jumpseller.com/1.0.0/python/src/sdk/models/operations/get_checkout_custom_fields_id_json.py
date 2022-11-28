from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCheckoutCustomFieldsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckoutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckoutCustomFieldsIDJSONRequest:
    path_params: GetCheckoutCustomFieldsIDJSONPathParams = field()
    query_params: GetCheckoutCustomFieldsIDJSONQueryParams = field()
    

@dataclass
class GetCheckoutCustomFieldsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
