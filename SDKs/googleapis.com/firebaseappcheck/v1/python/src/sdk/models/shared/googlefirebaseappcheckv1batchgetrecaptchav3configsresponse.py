from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
    Response message for the BatchGetRecaptchaV3Configs method.
    """
    
    configs: Optional[List[GoogleFirebaseAppcheckV1RecaptchaV3Config]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
