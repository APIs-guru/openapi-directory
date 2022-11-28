from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CollectionResponseWithTotalDomainForwardPaging:
    results: List[Domain] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    paging: Optional[ForwardPaging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
