from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1safetynetconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1safetynetconfig.GoogleFirebaseAppcheckV1SafetyNetConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
