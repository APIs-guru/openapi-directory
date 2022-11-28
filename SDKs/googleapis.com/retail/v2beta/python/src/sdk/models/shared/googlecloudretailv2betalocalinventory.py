from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaLocalInventory:
    r"""GoogleCloudRetailV2betaLocalInventory
    The inventory information at a place (e.g. a store) identified by a place ID.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    fulfillment_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentTypes') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    price_info: Optional[GoogleCloudRetailV2betaPriceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceInfo') }})
    
