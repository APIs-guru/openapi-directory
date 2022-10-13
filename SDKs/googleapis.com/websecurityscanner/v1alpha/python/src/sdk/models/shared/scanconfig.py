from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authentication
from . import scanrun
from . import schedule

class ScanConfigTargetPlatformsEnum(str, Enum):
    TARGET_PLATFORM_UNSPECIFIED = "TARGET_PLATFORM_UNSPECIFIED"
    APP_ENGINE = "APP_ENGINE"
    COMPUTE = "COMPUTE"
    CLOUD_RUN = "CLOUD_RUN"
    CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS"

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
    latest_run: Optional[scanrun.ScanRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRun' }})
    max_qps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxQps' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    starting_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingUrls' }})
    target_platforms: Optional[List[ScanConfigTargetPlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPlatforms' }})
    user_agent: Optional[ScanConfigUserAgentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    
