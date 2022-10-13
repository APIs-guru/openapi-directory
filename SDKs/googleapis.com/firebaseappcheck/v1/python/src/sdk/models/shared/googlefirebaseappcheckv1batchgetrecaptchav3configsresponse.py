from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1recaptchav3config


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1recaptchav3config.GoogleFirebaseAppcheckV1RecaptchaV3Config]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
