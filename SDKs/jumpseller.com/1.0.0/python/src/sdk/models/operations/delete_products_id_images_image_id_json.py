from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsIDImagesImageIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    image_id: int = field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsIDImagesImageIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsIDImagesImageIDJSONRequest:
    path_params: DeleteProductsIDImagesImageIDJSONPathParams = field()
    query_params: DeleteProductsIDImagesImageIDJSONQueryParams = field()
    

@dataclass
class DeleteProductsIDImagesImageIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_products_id_images_image_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
