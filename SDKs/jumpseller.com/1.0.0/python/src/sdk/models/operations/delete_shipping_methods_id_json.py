from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteShippingMethodsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteShippingMethodsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteShippingMethodsIDJSONRequest:
    path_params: DeleteShippingMethodsIDJSONPathParams = field()
    query_params: DeleteShippingMethodsIDJSONQueryParams = field()
    

@dataclass
class DeleteShippingMethodsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_shipping_methods_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
