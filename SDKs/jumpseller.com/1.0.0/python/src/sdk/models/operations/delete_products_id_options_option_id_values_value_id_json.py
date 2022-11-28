from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    value_id: int = field(metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONRequest:
    path_params: DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams = field()
    query_params: DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams = field()
    

@dataclass
class DeleteProductsIDOptionsOptionIDValuesValueIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_products_id_options_option_id_values_value_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
