from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsIDAttachmentsAttachmentIDJSONPathParams:
    attachment_id: int = field(metadata={'path_param': { 'field_name': 'attachment_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsIDAttachmentsAttachmentIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsIDAttachmentsAttachmentIDJSONRequest:
    path_params: DeleteProductsIDAttachmentsAttachmentIDJSONPathParams = field()
    query_params: DeleteProductsIDAttachmentsAttachmentIDJSONQueryParams = field()
    

@dataclass
class DeleteProductsIDAttachmentsAttachmentIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_products_id_attachments_attachment_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
