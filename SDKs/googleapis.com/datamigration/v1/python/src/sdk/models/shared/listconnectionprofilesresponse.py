from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectionprofile


@dataclass_json
@dataclass
class ListConnectionProfilesResponse:
    connection_profiles: Optional[List[connectionprofile.ConnectionProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionProfiles' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
