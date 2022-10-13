from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDVariantsVariantIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    variant_id: int = field(default=None, metadata={'path_param': { 'field_name': 'variant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDVariantsVariantIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDVariantsVariantIDJSONRequest:
    path_params: GetProductsIDVariantsVariantIDJSONPathParams = field(default=None)
    query_params: GetProductsIDVariantsVariantIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDVariantsVariantIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    variant: Optional[shared.Variant] = field(default=None)
    
