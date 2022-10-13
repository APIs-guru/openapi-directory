from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betarecaptchaconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betarecaptchaconfig.GoogleFirebaseAppcheckV1betaRecaptchaConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
