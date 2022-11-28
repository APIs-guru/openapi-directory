from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudWebriskV1RawIndices:
    r"""GoogleCloudWebriskV1RawIndices
    A set of raw indices to remove from a local list.
    """
    
    indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indices') }})
    
