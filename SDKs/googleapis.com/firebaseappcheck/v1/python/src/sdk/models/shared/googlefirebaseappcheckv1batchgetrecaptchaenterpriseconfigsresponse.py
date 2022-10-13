from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1recaptchaenterpriseconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1recaptchaenterpriseconfig.GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
