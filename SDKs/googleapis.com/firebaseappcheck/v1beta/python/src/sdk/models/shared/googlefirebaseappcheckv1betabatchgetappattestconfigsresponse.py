from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betaappattestconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betaappattestconfig.GoogleFirebaseAppcheckV1betaAppAttestConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
