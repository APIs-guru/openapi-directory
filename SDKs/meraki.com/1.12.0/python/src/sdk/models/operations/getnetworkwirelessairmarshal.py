from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessAirMarshalPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessAirMarshalQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessAirMarshalRequest:
    path_params: GetNetworkWirelessAirMarshalPathParams = field(default=None)
    query_params: GetNetworkWirelessAirMarshalQueryParams = field(default=None)
    

@dataclass
class GetNetworkWirelessAirMarshalResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_air_marshal_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
