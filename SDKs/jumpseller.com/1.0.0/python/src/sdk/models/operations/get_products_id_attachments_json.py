from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDAttachmentsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDAttachmentsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDAttachmentsJSONRequest:
    path_params: GetProductsIDAttachmentsJSONPathParams = field(default=None)
    query_params: GetProductsIDAttachmentsJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDAttachmentsJSONResponse:
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
