from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetShipmentPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    shipment_id: str = field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShipmentRequest:
    path_params: GetShipmentPathParams = field()
    

@dataclass
class GetShipmentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    shipment_expand_vo: Optional[Any] = field(default=None)
    
