from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteResponse:
    info: Optional[ResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    paths: Optional[List[RouteResponsePath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    
