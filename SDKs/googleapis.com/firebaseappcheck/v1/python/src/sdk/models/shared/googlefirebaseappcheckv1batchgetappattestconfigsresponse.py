from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
    Response message for the BatchGetAppAttestConfigs method.
    """
    
    configs: Optional[List[GoogleFirebaseAppcheckV1AppAttestConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
