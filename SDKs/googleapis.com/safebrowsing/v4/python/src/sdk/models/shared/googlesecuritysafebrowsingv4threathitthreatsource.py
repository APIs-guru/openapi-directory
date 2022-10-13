from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum(str, Enum):
    THREAT_SOURCE_TYPE_UNSPECIFIED = "THREAT_SOURCE_TYPE_UNSPECIFIED"
    MATCHING_URL = "MATCHING_URL"
    TAB_URL = "TAB_URL"
    TAB_REDIRECT = "TAB_REDIRECT"
    TAB_RESOURCE = "TAB_RESOURCE"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatHitThreatSource:
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    remote_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteIp' }})
    type: Optional[GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
