from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ConstraintListConstraint:
    supports_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsIn' }})
    supports_under: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsUnder' }})
    
