from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1service


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1UpdateServiceRequest:
    service: Optional[googlefirebaseappcheckv1service.GoogleFirebaseAppcheckV1Service] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
