from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacetResult:
    r"""FacetResult
    Source specific facet response
    """
    
    buckets: Optional[List[FacetBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    
