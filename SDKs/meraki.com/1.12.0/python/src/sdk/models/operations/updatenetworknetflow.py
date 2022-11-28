from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkNetflowPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkNetflowRequestBody:
    collector_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorIp') }})
    collector_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorPort') }})
    eta_dst_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaDstPort') }})
    eta_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaEnabled') }})
    reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingEnabled') }})
    

@dataclass
class UpdateNetworkNetflowRequest:
    path_params: UpdateNetworkNetflowPathParams = field()
    request: Optional[UpdateNetworkNetflowRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkNetflowResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_netflow_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
