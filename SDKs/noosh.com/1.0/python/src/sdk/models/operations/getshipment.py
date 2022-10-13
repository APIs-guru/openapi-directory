from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetShipmentPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    shipment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShipmentRequest:
    path_params: GetShipmentPathParams = field(default=None)
    

@dataclass
class GetShipmentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    shipment_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
