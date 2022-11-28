from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    OSX = "OSX"
    IOS = "IOS"
    ANY_PLATFORM = "ANY_PLATFORM"
    ALL_PLATFORMS = "ALL_PLATFORMS"
    CHROME = "CHROME"

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    PARTIAL_UPDATE = "PARTIAL_UPDATE"
    FULL_UPDATE = "FULL_UPDATE"

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum(str, Enum):
    THREAT_ENTRY_TYPE_UNSPECIFIED = "THREAT_ENTRY_TYPE_UNSPECIFIED"
    URL = "URL"
    EXECUTABLE = "EXECUTABLE"
    IP_RANGE = "IP_RANGE"
    CHROME_EXTENSION = "CHROME_EXTENSION"
    FILENAME = "FILENAME"
    CERT = "CERT"

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum(str, Enum):
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
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse:
    r"""GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse
    An update to an individual list.
    """
    
    additions: Optional[List[GoogleSecuritySafebrowsingV4ThreatEntrySet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    checksum: Optional[GoogleSecuritySafebrowsingV4Checksum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    new_client_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newClientState') }})
    platform_type: Optional[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    removals: Optional[List[GoogleSecuritySafebrowsingV4ThreatEntrySet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removals') }})
    response_type: Optional[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    threat_entry_type: Optional[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatEntryType') }})
    threat_type: Optional[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatType') }})
    
