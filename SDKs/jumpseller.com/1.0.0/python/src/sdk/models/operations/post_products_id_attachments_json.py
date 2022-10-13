from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDAttachmentsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDAttachmentsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDAttachmentsJSONRequest:
    path_params: PostProductsIDAttachmentsJSONPathParams = field(default=None)
    query_params: PostProductsIDAttachmentsJSONQueryParams = field(default=None)
    request: shared.AttachmentEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDAttachmentsJSONResponse:
    attachment: Optional[shared.Attachment] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
