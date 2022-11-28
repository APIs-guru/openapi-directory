from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPGetAction:
    r"""HTTPGetAction
    Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests.
    """
    
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    http_headers: Optional[List[HTTPHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaders') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
