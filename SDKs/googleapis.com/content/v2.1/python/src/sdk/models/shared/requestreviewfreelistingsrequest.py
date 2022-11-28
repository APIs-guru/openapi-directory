from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestReviewFreeListingsRequest:
    r"""RequestReviewFreeListingsRequest
    Request message for the RequestReviewFreeListings Program method.
    """
    
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
