from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betarecaptchav3config


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betarecaptchav3config.GoogleFirebaseAppcheckV1betaRecaptchaV3Config]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
