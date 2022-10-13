from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaservice


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaListServicesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    services: Optional[List[googlefirebaseappcheckv1betaservice.GoogleFirebaseAppcheckV1betaService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
