from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchQosRulesOrderPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchQosRulesOrderRequestBody:
    rule_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleIds') }})
    

@dataclass
class UpdateNetworkSwitchQosRulesOrderRequest:
    path_params: UpdateNetworkSwitchQosRulesOrderPathParams = field()
    request: UpdateNetworkSwitchQosRulesOrderRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchQosRulesOrderResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
