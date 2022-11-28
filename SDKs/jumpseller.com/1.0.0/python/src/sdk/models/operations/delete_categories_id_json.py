from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCategoriesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCategoriesIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCategoriesIDJSONRequest:
    path_params: DeleteCategoriesIDJSONPathParams = field()
    query_params: DeleteCategoriesIDJSONQueryParams = field()
    

@dataclass
class DeleteCategoriesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_categories_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
