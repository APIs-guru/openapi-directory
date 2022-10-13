from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PosStore:
    gcid_category: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcidCategory' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    store_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeAddress' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeName' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
