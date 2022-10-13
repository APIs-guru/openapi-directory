from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCheckoutCustomFieldsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONRequest:
    path_params: PutCheckoutCustomFieldsIDJSONPathParams = field(default=None)
    query_params: PutCheckoutCustomFieldsIDJSONQueryParams = field(default=None)
    request: shared.CheckoutCustomFieldEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCheckoutCustomFieldsIDJSONResponse:
    checkout_custom_field: Optional[shared.CheckoutCustomField] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
