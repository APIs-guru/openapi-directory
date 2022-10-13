from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4clientinfo
from . import googlesecuritysafebrowsingv4threatinfo


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest:
    client: Optional[googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    threat_info: Optional[googlesecuritysafebrowsingv4threatinfo.GoogleSecuritySafebrowsingV4ThreatInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threatInfo' }})
    
