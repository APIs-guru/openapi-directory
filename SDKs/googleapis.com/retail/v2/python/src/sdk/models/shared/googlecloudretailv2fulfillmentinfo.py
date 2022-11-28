from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2FulfillmentInfo:
    r"""GoogleCloudRetailV2FulfillmentInfo
    Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
    """
    
    place_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeIds') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
