from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetConfiguration:
    config: Optional[ConfigFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    imports: Optional[List[ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imports') }})
    
