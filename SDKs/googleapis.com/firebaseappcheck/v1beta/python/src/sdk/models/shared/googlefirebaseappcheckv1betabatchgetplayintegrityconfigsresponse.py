from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaplayintegrityconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betaplayintegrityconfig.GoogleFirebaseAppcheckV1betaPlayIntegrityConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
