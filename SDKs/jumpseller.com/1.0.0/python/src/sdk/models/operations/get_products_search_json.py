from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetProductsSearchJSONFieldsEnum(str, Enum):
    SKU = "sku"
    BARCODE = "barcode"
    BRAND = "brand"
    NAME = "name"
    DESCRIPTION = "description"
    VARIANTS = "variants"
    OPTION_NAME = "option_name"
    CUSTOM_FIELDS = "custom_fields"
    CUSTOM_FIELDS_SELECTS = "custom_fields_selects"


@dataclass
class GetProductsSearchJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    fields: Optional[GetProductsSearchJSONFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsSearchJSONRequest:
    query_params: GetProductsSearchJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsSearchJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    products: Optional[List[shared.Product]] = field(default=None)
    status_code: int = field(default=None)
    
