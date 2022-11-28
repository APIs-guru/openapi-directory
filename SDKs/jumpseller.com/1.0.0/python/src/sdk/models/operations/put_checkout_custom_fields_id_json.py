from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCheckoutCustomFieldsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONRequest:
    path_params: PutCheckoutCustomFieldsIDJSONPathParams = field()
    query_params: PutCheckoutCustomFieldsIDJSONQueryParams = field()
    request: shared.CheckoutCustomFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
