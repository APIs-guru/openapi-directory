from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsIDVariantsVariantIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    variant_id: int = field(default=None, metadata={'path_param': { 'field_name': 'variant_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsIDVariantsVariantIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsIDVariantsVariantIDJSONRequest:
    path_params: PutProductsIDVariantsVariantIDJSONPathParams = field(default=None)
    query_params: PutProductsIDVariantsVariantIDJSONQueryParams = field(default=None)
    request: shared.VariantEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProductsIDVariantsVariantIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    variant: Optional[shared.Variant] = field(default=None)
    
