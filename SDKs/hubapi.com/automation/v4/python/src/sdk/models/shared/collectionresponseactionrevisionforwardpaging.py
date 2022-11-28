from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CollectionResponseActionRevisionForwardPaging:
    results: List[ActionRevision] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    paging: Optional[ForwardPaging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
