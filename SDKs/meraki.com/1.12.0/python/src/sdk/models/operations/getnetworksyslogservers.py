from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSyslogServersPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSyslogServersRequest:
    path_params: GetNetworkSyslogServersPathParams = field()
    

@dataclass
class GetNetworkSyslogServersResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_syslog_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
