from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetGuestAttributesRequest:
    r"""GetGuestAttributesRequest
    Request for GetGuestAttributes.
    """
    
    query_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPath') }})
    worker_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerIds') }})
    
