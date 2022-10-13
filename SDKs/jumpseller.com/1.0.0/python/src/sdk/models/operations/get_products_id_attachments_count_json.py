from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsIDAttachmentsCountJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDAttachmentsCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDAttachmentsCountJSONRequest:
    path_params: GetProductsIDAttachmentsCountJSONPathParams = field(default=None)
    query_params: GetProductsIDAttachmentsCountJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDAttachmentsCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
