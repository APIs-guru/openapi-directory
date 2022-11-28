from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDAttachmentsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDAttachmentsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDAttachmentsJSONRequest:
    path_params: PostProductsIDAttachmentsJSONPathParams = field()
    query_params: PostProductsIDAttachmentsJSONQueryParams = field()
    request: shared.AttachmentEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDAttachmentsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    attachment: Optional[shared.Attachment] = field(default=None)
    
