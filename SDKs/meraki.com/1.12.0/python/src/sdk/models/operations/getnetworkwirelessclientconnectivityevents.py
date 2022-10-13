from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetNetworkWirelessClientConnectivityEventsPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkWirelessClientConnectivityEventsBandEnum(str, Enum):
    TWO_4 = "2.4"
    FIVE = "5"

class GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum(str, Enum):
    GOOD = "good"
    INFO = "info"
    WARN = "warn"
    BAD = "bad"

class GetNetworkWirelessClientConnectivityEventsTypesEnum(str, Enum):
    ASSOC = "assoc"
    DISASSOC = "disassoc"
    AUTH = "auth"
    DEAUTH = "deauth"
    DNS = "dns"
    DHCP = "dhcp"
    ROAM = "roam"
    CONNECTION = "connection"
    STICKY = "sticky"


@dataclass
class GetNetworkWirelessClientConnectivityEventsQueryParams:
    band: Optional[GetNetworkWirelessClientConnectivityEventsBandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'band', 'style': 'form', 'explode': True }})
    device_serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    included_severities: Optional[List[GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'includedSeverities', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    types: Optional[List[GetNetworkWirelessClientConnectivityEventsTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': False }})
    

@dataclass
class GetNetworkWirelessClientConnectivityEventsRequest:
    path_params: GetNetworkWirelessClientConnectivityEventsPathParams = field(default=None)
    query_params: GetNetworkWirelessClientConnectivityEventsQueryParams = field(default=None)
    

@dataclass
class GetNetworkWirelessClientConnectivityEventsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_client_connectivity_events_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
