from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    OSX = "OSX"
    IOS = "IOS"
    ANY_PLATFORM = "ANY_PLATFORM"
    ALL_PLATFORMS = "ALL_PLATFORMS"
    CHROME = "CHROME"

class GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum(str, Enum):
    THREAT_ENTRY_TYPE_UNSPECIFIED = "THREAT_ENTRY_TYPE_UNSPECIFIED"
    URL = "URL"
    EXECUTABLE = "EXECUTABLE"
    IP_RANGE = "IP_RANGE"
    CHROME_EXTENSION = "CHROME_EXTENSION"
    FILENAME = "FILENAME"
    CERT = "CERT"

class GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum(str, Enum):
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
class GoogleSecuritySafebrowsingV4ThreatMatch:
    r"""GoogleSecuritySafebrowsingV4ThreatMatch
    A match when checking a threat entry in the Safe Browsing threat lists.
    """
    
    cache_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheDuration') }})
    platform_type: Optional[GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    threat: Optional[GoogleSecuritySafebrowsingV4ThreatEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threat') }})
    threat_entry_metadata: Optional[GoogleSecuritySafebrowsingV4ThreatEntryMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatEntryMetadata') }})
    threat_entry_type: Optional[GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatEntryType') }})
    threat_type: Optional[GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatType') }})
    
