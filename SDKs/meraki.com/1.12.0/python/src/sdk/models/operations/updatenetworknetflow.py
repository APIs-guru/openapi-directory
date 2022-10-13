from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkNetflowPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkNetflowRequestBody:
    collector_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectorIp' }})
    collector_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectorPort' }})
    eta_dst_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etaDstPort' }})
    eta_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etaEnabled' }})
    reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingEnabled' }})
    

@dataclass
class UpdateNetworkNetflowRequest:
    path_params: UpdateNetworkNetflowPathParams = field(default=None)
    request: Optional[UpdateNetworkNetflowRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkNetflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_netflow_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
