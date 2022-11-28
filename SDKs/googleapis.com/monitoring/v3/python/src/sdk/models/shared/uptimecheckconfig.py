from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UptimeCheckConfigCheckerTypeEnum(str, Enum):
    CHECKER_TYPE_UNSPECIFIED = "CHECKER_TYPE_UNSPECIFIED"
    STATIC_IP_CHECKERS = "STATIC_IP_CHECKERS"
    VPC_CHECKERS = "VPC_CHECKERS"

class UptimeCheckConfigSelectedRegionsEnum(str, Enum):
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED"
    USA = "USA"
    EUROPE = "EUROPE"
    SOUTH_AMERICA = "SOUTH_AMERICA"
    ASIA_PACIFIC = "ASIA_PACIFIC"


@dataclass_json
@dataclass
class UptimeCheckConfig:
    r"""UptimeCheckConfig
    This message configures which resources and services to monitor for availability.
    """
    
    checker_type: Optional[UptimeCheckConfigCheckerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkerType') }})
    content_matchers: Optional[List[ContentMatcher]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentMatchers') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    http_check: Optional[HTTPCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCheck') }})
    internal_checkers: Optional[List[InternalChecker]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalCheckers') }})
    is_internal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInternal') }})
    monitored_resource: Optional[MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResource') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    resource_group: Optional[ResourceGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    selected_regions: Optional[List[UptimeCheckConfigSelectedRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedRegions') }})
    tcp_check: Optional[TCPCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpCheck') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
