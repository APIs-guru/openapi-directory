from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaupdateservicerequest


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest:
    requests: Optional[List[googlefirebaseappcheckv1betaupdateservicerequest.GoogleFirebaseAppcheckV1betaUpdateServiceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
