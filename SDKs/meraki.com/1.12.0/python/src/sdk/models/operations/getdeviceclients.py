from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceClientsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceClientsQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceClientsRequest:
    path_params: GetDeviceClientsPathParams = field()
    query_params: GetDeviceClientsQueryParams = field()
    

@dataclass
class GetDeviceClientsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_clients_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
