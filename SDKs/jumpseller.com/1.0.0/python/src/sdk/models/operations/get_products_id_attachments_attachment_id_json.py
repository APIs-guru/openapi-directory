from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONPathParams:
    attachment_id: int = field(metadata={'path_param': { 'field_name': 'attachment_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONRequest:
    path_params: GetProductsIDAttachmentsAttachmentIDJSONPathParams = field()
    query_params: GetProductsIDAttachmentsAttachmentIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    attachment: Optional[shared.Attachment] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
