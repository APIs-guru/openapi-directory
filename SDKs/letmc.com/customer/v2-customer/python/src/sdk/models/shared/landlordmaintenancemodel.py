from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordmaintenancejobmodel


@dataclass_json
@dataclass
class LandlordMaintenanceModel:
    jobs: Optional[List[landlordmaintenancejobmodel.LandlordMaintenanceJobModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jobs' }})
    
