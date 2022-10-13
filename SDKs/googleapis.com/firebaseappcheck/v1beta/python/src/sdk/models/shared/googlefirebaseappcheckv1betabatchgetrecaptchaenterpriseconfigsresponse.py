from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betarecaptchaenterpriseconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1betarecaptchaenterpriseconfig.GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    
