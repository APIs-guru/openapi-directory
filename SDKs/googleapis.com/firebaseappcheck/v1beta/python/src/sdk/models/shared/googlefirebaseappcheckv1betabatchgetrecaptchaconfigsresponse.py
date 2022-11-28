from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
    Response message for the BatchGetRecaptchaConfigs method.
    """
    
    configs: Optional[List[GoogleFirebaseAppcheckV1betaRecaptchaConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
