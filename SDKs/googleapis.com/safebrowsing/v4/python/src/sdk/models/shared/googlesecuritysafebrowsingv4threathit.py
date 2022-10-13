from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4clientinfo
from . import googlesecuritysafebrowsingv4threatentry
from . import googlesecuritysafebrowsingv4threathitthreatsource
from . import googlesecuritysafebrowsingv4threathituserinfo

class GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    OSX = "OSX"
    IOS = "IOS"
    ANY_PLATFORM = "ANY_PLATFORM"
    ALL_PLATFORMS = "ALL_PLATFORMS"
    CHROME = "CHROME"

class GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    POTENTIALLY_HARMFUL_APPLICATION = "POTENTIALLY_HARMFUL_APPLICATION"
    SOCIAL_ENGINEERING_INTERNAL = "SOCIAL_ENGINEERING_INTERNAL"
    API_ABUSE = "API_ABUSE"
    MALICIOUS_BINARY = "MALICIOUS_BINARY"
    CSD_WHITELIST = "CSD_WHITELIST"
    CSD_DOWNLOAD_WHITELIST = "CSD_DOWNLOAD_WHITELIST"
    CLIENT_INCIDENT = "CLIENT_INCIDENT"
    CLIENT_INCIDENT_WHITELIST = "CLIENT_INCIDENT_WHITELIST"
    APK_MALWARE_OFFLINE = "APK_MALWARE_OFFLINE"
    SUBRESOURCE_FILTER = "SUBRESOURCE_FILTER"
    SUSPICIOUS = "SUSPICIOUS"
    TRICK_TO_BILL = "TRICK_TO_BILL"
    HIGH_CONFIDENCE_ALLOWLIST = "HIGH_CONFIDENCE_ALLOWLIST"
    ACCURACY_TIPS = "ACCURACY_TIPS"
    SOCIAL_ENGINEERING_LOWER_PRECISION = "SOCIAL_ENGINEERING_LOWER_PRECISION"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatHit:
    client_info: Optional[googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientInfo' }})
    entry: Optional[googlesecuritysafebrowsingv4threatentry.GoogleSecuritySafebrowsingV4ThreatEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry' }})
    platform_type: Optional[GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformType' }})
    resources: Optional[List[googlesecuritysafebrowsingv4threathitthreatsource.GoogleSecuritySafebrowsingV4ThreatHitThreatSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    threat_type: Optional[GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threatType' }})
    user_info: Optional[googlesecuritysafebrowsingv4threathituserinfo.GoogleSecuritySafebrowsingV4ThreatHitUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    
