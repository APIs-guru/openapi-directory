from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest:
    r"""GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest
    Request message for ProductService.RemoveFulfillmentPlaces method.
    """
    
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMissing') }})
    place_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeIds') }})
    remove_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeTime') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
