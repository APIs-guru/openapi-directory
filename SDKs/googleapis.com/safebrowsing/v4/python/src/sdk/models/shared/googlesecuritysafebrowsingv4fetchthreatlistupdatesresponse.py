from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse:
    list_update_responses: Optional[List[googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listUpdateResponses' }})
    minimum_wait_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumWaitDuration' }})
    
