from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocationKey:
    r"""LocationKey
    Alternate/surrogate key references for a location.
    """
    
    explicit_no_place_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitNoPlaceId') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    plus_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusPageId') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
