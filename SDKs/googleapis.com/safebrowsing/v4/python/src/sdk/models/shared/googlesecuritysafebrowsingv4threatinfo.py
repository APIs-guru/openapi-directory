from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    OSX = "OSX"
    IOS = "IOS"
    ANY_PLATFORM = "ANY_PLATFORM"
    ALL_PLATFORMS = "ALL_PLATFORMS"
    CHROME = "CHROME"

class GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum(str, Enum):
    THREAT_ENTRY_TYPE_UNSPECIFIED = "THREAT_ENTRY_TYPE_UNSPECIFIED"
    URL = "URL"
    EXECUTABLE = "EXECUTABLE"
    IP_RANGE = "IP_RANGE"
    CHROME_EXTENSION = "CHROME_EXTENSION"
    FILENAME = "FILENAME"
    CERT = "CERT"

class GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum(str, Enum):
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
class GoogleSecuritySafebrowsingV4ThreatInfo:
    r"""GoogleSecuritySafebrowsingV4ThreatInfo
    The information regarding one or more threats that a client submits when checking for matches in threat lists.
    """
    
    platform_types: Optional[List[GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformTypes') }})
    threat_entries: Optional[List[GoogleSecuritySafebrowsingV4ThreatEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatEntries') }})
    threat_entry_types: Optional[List[GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatEntryTypes') }})
    threat_types: Optional[List[GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatTypes') }})
    
