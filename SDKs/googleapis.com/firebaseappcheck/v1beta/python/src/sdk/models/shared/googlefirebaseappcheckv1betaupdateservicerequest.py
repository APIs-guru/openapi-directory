from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaservice


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaUpdateServiceRequest:
    service: Optional[googlefirebaseappcheckv1betaservice.GoogleFirebaseAppcheckV1betaService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
