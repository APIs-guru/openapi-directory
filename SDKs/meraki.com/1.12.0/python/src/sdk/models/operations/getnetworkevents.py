from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetNetworkEventsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkEventsProductTypeEnum(str, Enum):
    WIRELESS = "wireless"
    APPLIANCE = "appliance"
    SWITCH = "switch"
    SYSTEMS_MANAGER = "systemsManager"
    CAMERA = "camera"
    CELLULAR_GATEWAY = "cellularGateway"


@dataclass
class GetNetworkEventsQueryParams:
    client_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientIp', 'style': 'form', 'explode': True }})
    client_mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientMac', 'style': 'form', 'explode': True }})
    client_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientName', 'style': 'form', 'explode': True }})
    device_mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceMac', 'style': 'form', 'explode': True }})
    device_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceName', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    excluded_event_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludedEventTypes', 'style': 'form', 'explode': False }})
    included_event_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'includedEventTypes', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    product_type: Optional[GetNetworkEventsProductTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'productType', 'style': 'form', 'explode': True }})
    sm_device_mac: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'smDeviceMac', 'style': 'form', 'explode': True }})
    sm_device_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'smDeviceName', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkEventsRequest:
    path_params: GetNetworkEventsPathParams = field(default=None)
    query_params: GetNetworkEventsQueryParams = field(default=None)
    

@dataclass
class GetNetworkEventsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_events_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
