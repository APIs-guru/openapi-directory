from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obbeneficiary5


@dataclass_json
@dataclass
class ObReadDataBeneficiary5:
    beneficiary: Optional[List[obbeneficiary5.ObBeneficiary5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beneficiary' }})
    
