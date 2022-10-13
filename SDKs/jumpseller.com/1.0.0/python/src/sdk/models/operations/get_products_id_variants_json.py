from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDVariantsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDVariantsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDVariantsJSONRequest:
    path_params: GetProductsIDVariantsJSONPathParams = field(default=None)
    query_params: GetProductsIDVariantsJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDVariantsJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    variants: Optional[List[shared.Variant]] = field(default=None)
    
