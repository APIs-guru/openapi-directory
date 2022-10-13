from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSyslogServersPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSyslogServersRequestBodyServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    roles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSyslogServersRequestBody:
    servers: List[UpdateNetworkSyslogServersRequestBodyServers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    

@dataclass
class UpdateNetworkSyslogServersRequest:
    path_params: UpdateNetworkSyslogServersPathParams = field(default=None)
    request: UpdateNetworkSyslogServersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSyslogServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_syslog_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
