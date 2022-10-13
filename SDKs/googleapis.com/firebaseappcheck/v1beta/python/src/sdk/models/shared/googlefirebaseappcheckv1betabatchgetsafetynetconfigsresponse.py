from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betasafetynetconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betasafetynetconfig.GoogleFirebaseAppcheckV1betaSafetyNetConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
