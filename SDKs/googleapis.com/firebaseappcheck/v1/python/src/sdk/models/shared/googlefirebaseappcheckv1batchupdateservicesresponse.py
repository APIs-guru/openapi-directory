from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1service


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse:
    services: Optional[List[googlefirebaseappcheckv1service.GoogleFirebaseAppcheckV1Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
