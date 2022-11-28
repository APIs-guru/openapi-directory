from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions:
    type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits:
    r"""UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules:
    definitions: List[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    pcp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pcpTagValue') }})
    per_client_bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody:
    default_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRulesEnabled') }})
    rules: Optional[List[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    traffic_shaping_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficShapingEnabled') }})
    

@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequest:
    path_params: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
