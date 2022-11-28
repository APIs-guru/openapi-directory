from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostShipmentPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostShipmentRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    shipment_location_post_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    shipment_location_post_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PostShipmentRequest:
    path_params: PostShipmentPathParams = field()
    request: Optional[PostShipmentRequests] = field(default=None)
    

@dataclass
class PostShipmentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    shipment_locations_post_result_vo: Optional[Any] = field(default=None)
    
