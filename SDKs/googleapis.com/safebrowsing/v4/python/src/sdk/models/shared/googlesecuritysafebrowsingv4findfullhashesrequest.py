from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4clientinfo
from . import googlesecuritysafebrowsingv4clientinfo
from . import googlesecuritysafebrowsingv4threatinfo


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesRequest:
    api_client: Optional[googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiClient' }})
    client: Optional[googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    client_states: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientStates' }})
    threat_info: Optional[googlesecuritysafebrowsingv4threatinfo.GoogleSecuritySafebrowsingV4ThreatInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threatInfo' }})
    
