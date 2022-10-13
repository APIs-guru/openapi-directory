from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2AddFulfillmentPlacesRequest:
    add_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addTime' }})
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissing' }})
    place_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeIds' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
