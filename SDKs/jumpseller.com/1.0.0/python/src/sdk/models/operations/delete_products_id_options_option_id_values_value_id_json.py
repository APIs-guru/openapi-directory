from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    value_id: int = field(default=None, metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONRequest:
    path_params: DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams = field(default=None)
    query_params: DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONResponse:
    content_type: str = field(default=None)
    delete_products_id_options_option_id_values_value_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
