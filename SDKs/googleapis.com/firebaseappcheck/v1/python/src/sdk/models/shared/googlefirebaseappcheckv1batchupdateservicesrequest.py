from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1updateservicerequest


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest:
    requests: Optional[List[googlefirebaseappcheckv1updateservicerequest.GoogleFirebaseAppcheckV1UpdateServiceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
