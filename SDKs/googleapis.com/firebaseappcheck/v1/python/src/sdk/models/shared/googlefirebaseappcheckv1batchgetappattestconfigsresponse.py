from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1appattestconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1appattestconfig.GoogleFirebaseAppcheckV1AppAttestConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
