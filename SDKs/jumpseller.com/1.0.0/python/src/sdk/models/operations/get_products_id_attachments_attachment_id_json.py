from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONPathParams:
    attachment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'attachment_id', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONRequest:
    path_params: GetProductsIDAttachmentsAttachmentIDJSONPathParams = field(default=None)
    query_params: GetProductsIDAttachmentsAttachmentIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDAttachmentsAttachmentIDJSONResponse:
    attachment: Optional[shared.Attachment] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
