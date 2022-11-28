from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
    Response message for the BatchGetDeviceCheckConfigs method.
    """
    
    configs: Optional[List[GoogleFirebaseAppcheckV1betaDeviceCheckConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
