from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDVariantsVariantIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    variant_id: int = field(metadata={'path_param': { 'field_name': 'variant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDVariantsVariantIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDVariantsVariantIDJSONRequest:
    path_params: GetProductsIDVariantsVariantIDJSONPathParams = field()
    query_params: GetProductsIDVariantsVariantIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDVariantsVariantIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    variant: Optional[shared.Variant] = field(default=None)
    
