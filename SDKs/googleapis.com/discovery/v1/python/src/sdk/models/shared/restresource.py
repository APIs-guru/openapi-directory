from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RestResource:
    methods: Optional[dict[str, RestMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    resources: Optional[dict[str, RestResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
