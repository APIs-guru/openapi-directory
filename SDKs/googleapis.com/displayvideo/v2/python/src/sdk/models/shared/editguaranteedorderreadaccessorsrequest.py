from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EditGuaranteedOrderReadAccessorsRequest:
    added_advertisers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedAdvertisers' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    read_access_inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readAccessInherited' }})
    removed_advertisers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedAdvertisers' }})
    
