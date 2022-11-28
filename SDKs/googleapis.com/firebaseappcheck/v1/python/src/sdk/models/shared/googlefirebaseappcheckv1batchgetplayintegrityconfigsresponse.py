from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
    Response message for the BatchGetPlayIntegrityConfigs method.
    """
    
    configs: Optional[List[GoogleFirebaseAppcheckV1PlayIntegrityConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
