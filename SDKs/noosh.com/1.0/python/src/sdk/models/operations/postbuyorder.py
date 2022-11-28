from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostBuyOrderPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostBuyOrderRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    order_po: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    order_po1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PostBuyOrderRequest:
    path_params: PostBuyOrderPathParams = field()
    request: Optional[PostBuyOrderRequests] = field(default=None)
    

@dataclass
class PostBuyOrderResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_po: Optional[Any] = field(default=None)
    
