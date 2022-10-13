from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firebaseappinfo


@dataclass_json
@dataclass
class SearchFirebaseAppsResponse:
    apps: Optional[List[firebaseappinfo.FirebaseAppInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
