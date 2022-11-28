from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2HTTPGetAction:
    r"""GoogleCloudRunV2HTTPGetAction
    HTTPGetAction describes an action based on HTTP Get requests.
    """
    
    http_headers: Optional[List[GoogleCloudRunV2HTTPHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaders') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
