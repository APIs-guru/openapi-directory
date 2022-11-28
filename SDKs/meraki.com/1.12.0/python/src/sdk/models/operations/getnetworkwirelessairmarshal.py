from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessAirMarshalPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessAirMarshalQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkWirelessAirMarshalRequest:
    path_params: GetNetworkWirelessAirMarshalPathParams = field()
    query_params: GetNetworkWirelessAirMarshalQueryParams = field()
    

@dataclass
class GetNetworkWirelessAirMarshalResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_air_marshal_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
