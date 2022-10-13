from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authentication
from . import schedule

class ScanConfigExportToSecurityCommandCenterEnum(str, Enum):
    EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class ScanConfigRiskLevelEnum(str, Enum):
    RISK_LEVEL_UNSPECIFIED = "RISK_LEVEL_UNSPECIFIED"
    NORMAL = "NORMAL"
    LOW = "LOW"

class ScanConfigUserAgentEnum(str, Enum):
    USER_AGENT_UNSPECIFIED = "USER_AGENT_UNSPECIFIED"
    CHROME_LINUX = "CHROME_LINUX"
    CHROME_ANDROID = "CHROME_ANDROID"
    SAFARI_IPHONE = "SAFARI_IPHONE"


@dataclass_json
@dataclass
class ScanConfig:
    authentication: Optional[authentication.Authentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    blacklist_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blacklistPatterns' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    export_to_security_command_center: Optional[ScanConfigExportToSecurityCommandCenterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportToSecurityCommandCenter' }})
    ignore_http_status_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreHttpStatusErrors' }})
    managed_scan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedScan' }})
    max_qps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxQps' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    risk_level: Optional[ScanConfigRiskLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskLevel' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    starting_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingUrls' }})
    static_ip_scan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIpScan' }})
    user_agent: Optional[ScanConfigUserAgentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    
