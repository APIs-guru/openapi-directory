from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSyslogServersPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSyslogServersRequestBodyServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    roles: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSyslogServersRequestBody:
    servers: List[UpdateNetworkSyslogServersRequestBodyServers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    

@dataclass
class UpdateNetworkSyslogServersRequest:
    path_params: UpdateNetworkSyslogServersPathParams = field()
    request: UpdateNetworkSyslogServersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSyslogServersResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_syslog_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
