from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDAttachmentsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDAttachmentsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDAttachmentsJSONRequest:
    path_params: GetProductsIDAttachmentsJSONPathParams = field()
    query_params: GetProductsIDAttachmentsJSONQueryParams = field()
    

@dataclass
class GetProductsIDAttachmentsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
