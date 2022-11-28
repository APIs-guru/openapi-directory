from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateLocationRequest:
    r"""AssociateLocationRequest
    Request message for Locations.AssociateLocationRequest.
    """
    
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    
