from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guestunitfeatures


@dataclass_json
@dataclass
class GuestUnitType:
    codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codes' }})
    features: Optional[guestunitfeatures.GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    
