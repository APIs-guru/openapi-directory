from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceTrafficShapingRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions:
    type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules:
    definitions: List[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    per_client_bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBody:
    default_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRulesEnabled') }})
    rules: Optional[List[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequest:
    path_params: UpdateNetworkApplianceTrafficShapingRulesPathParams = field()
    request: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
