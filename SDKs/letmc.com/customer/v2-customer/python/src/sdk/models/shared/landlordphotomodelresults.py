from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordphotomodel


@dataclass_json
@dataclass
class LandlordPhotoModelResults:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    data: Optional[List[landlordphotomodel.LandlordPhotoModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    
