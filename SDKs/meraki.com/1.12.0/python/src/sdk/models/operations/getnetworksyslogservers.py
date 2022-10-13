from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSyslogServersPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSyslogServersRequest:
    path_params: GetNetworkSyslogServersPathParams = field(default=None)
    

@dataclass
class GetNetworkSyslogServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_syslog_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
