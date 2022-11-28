from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetServicesResponse:
    r"""BatchGetServicesResponse
    Response message for the `BatchGetServices` method.
    """
    
    services: Optional[List[GoogleAPIServiceusageV1Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
