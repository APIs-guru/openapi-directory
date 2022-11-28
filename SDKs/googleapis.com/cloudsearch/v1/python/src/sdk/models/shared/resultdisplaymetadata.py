from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultDisplayMetadata:
    metalines: Optional[List[ResultDisplayLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metalines') }})
    object_type_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypeLabel') }})
    
