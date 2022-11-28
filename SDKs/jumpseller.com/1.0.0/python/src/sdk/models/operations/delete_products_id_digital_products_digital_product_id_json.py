from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsIDDigitalProductsDigitalProductIDJSONPathParams:
    digital_product_id: int = field(metadata={'path_param': { 'field_name': 'digital_product_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsIDDigitalProductsDigitalProductIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsIDDigitalProductsDigitalProductIDJSONRequest:
    path_params: DeleteProductsIDDigitalProductsDigitalProductIDJSONPathParams = field()
    query_params: DeleteProductsIDDigitalProductsDigitalProductIDJSONQueryParams = field()
    

@dataclass
class DeleteProductsIDDigitalProductsDigitalProductIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_products_id_digital_products_digital_product_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
