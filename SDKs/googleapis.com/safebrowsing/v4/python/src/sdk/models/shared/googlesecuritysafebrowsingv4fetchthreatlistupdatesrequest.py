from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4clientinfo
from . import googlesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest:
    client: Optional[googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    list_update_requests: Optional[List[googlesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listUpdateRequests' }})
    
