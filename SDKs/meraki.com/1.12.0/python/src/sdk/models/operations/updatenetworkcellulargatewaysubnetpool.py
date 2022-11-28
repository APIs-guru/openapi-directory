from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkCellularGatewaySubnetPoolPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequestBody:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    mask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mask') }})
    

@dataclass
class UpdateNetworkCellularGatewaySubnetPoolRequest:
    path_params: UpdateNetworkCellularGatewaySubnetPoolPathParams = field()
    request: Optional[UpdateNetworkCellularGatewaySubnetPoolRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewaySubnetPoolResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_cellular_gateway_subnet_pool_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
